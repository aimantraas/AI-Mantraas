import { google } from 'googleapis';

// Get credentials from environment variables
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

// Sheet names for different data types
export const SHEET_NAMES = {
  WAITLIST: 'Waitlist',
  SUBSCRIBERS: 'Subscribers',
} as const;

// Initialize Google Sheets client
function getGoogleSheetsClient() {
  if (!CLIENT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Google Sheets credentials not configured. Check GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY env variables.');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

// Ensure sheet exists with proper headers
async function ensureSheetExists(sheets: ReturnType<typeof getGoogleSheetsClient>, sheetName: string, headers: string[]) {
  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  try {
    // Check if sheet exists
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
    const sheetExists = spreadsheet.data.sheets?.some(sheet => sheet.properties?.title === sheetName);

    if (!sheetExists) {
      // Create new sheet
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: { title: sheetName },
              },
            },
          ],
        },
      });

      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `${sheetName}!A1:${String.fromCharCode(64 + headers.length)}1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });
    } else {
      // Check if headers exist
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: `${sheetName}!A1:${String.fromCharCode(64 + headers.length)}1`,
      });

      if (!response.data.values || response.data.values.length === 0) {
        // Add headers if they don't exist
        await sheets.spreadsheets.values.update({
          spreadsheetId: SHEET_ID,
          range: `${sheetName}!A1:${String.fromCharCode(64 + headers.length)}1`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [headers],
          },
        });
      }
    }
  } catch (error) {
    console.error(`Error ensuring sheet ${sheetName} exists:`, error);
    throw error;
  }
}

// Append a row to a sheet
export async function appendToSheet(sheetName: string, values: string[]) {
  const sheets = getGoogleSheetsClient();

  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  try {
    // Determine headers based on sheet name
    let headers: string[];
    if (sheetName === SHEET_NAMES.WAITLIST) {
      headers = ['Name', 'Company', 'Industry', 'Email', 'Phone', 'Timestamp'];
    } else if (sheetName === SHEET_NAMES.SUBSCRIBERS) {
      headers = ['Email', 'Phone', 'Timestamp'];
    } else {
      headers = values.map((_, i) => `Column ${i + 1}`);
    }

    // Ensure sheet exists with headers
    await ensureSheetExists(sheets, sheetName, headers);

    // Append the row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A:A`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    });

    return { success: true };
  } catch (error) {
    console.error(`Error appending to sheet ${sheetName}:`, error);
    throw error;
  }
}

// Check if email already exists in a sheet
export async function emailExists(sheetName: string, email: string): Promise<boolean> {
  const sheets = getGoogleSheetsClient();

  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  try {
    // Get all values from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) {
      return false; // No data or only headers
    }

    // Find email column index (usually column D for waitlist, column A for subscribers)
    const headers = rows[0];
    const emailColumnIndex = headers.findIndex(h => h.toLowerCase() === 'email');

    if (emailColumnIndex === -1) {
      return false;
    }

    // Check if email exists (skip header row)
    return rows.slice(1).some(row => row[emailColumnIndex]?.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error(`Error checking email existence in ${sheetName}:`, error);
    return false; // Return false on error to allow the submission
  }
}
