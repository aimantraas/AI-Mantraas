import { NextResponse } from "next/server";
import { appendToSheet, emailExists, SHEET_NAMES } from "@/lib/google-sheets";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9()+\-\s]{7,20}$/;

export async function POST(req: Request) {
  try {
    const { name, company, industry, email, phone } = await req.json();

    const nameVal = typeof name === "string" ? name.trim() : "";
    const companyVal = typeof company === "string" ? company.trim() : "";
    const industryVal = typeof industry === "string" ? industry.trim() : "";
    const emailVal = typeof email === "string" ? email.trim() : "";
    const phoneVal = typeof phone === "string" ? phone.trim() : "";

    if (!nameVal || !companyVal || !industryVal || !emailVal || !phoneVal) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }
    if (!emailRegex.test(emailVal)) {
      return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
    }
    if (!phoneRegex.test(phoneVal)) {
      return NextResponse.json({ success: false, message: "Invalid phone" }, { status: 400 });
    }

    // Check if email already exists
    const exists = await emailExists(SHEET_NAMES.WAITLIST, emailVal);
    if (exists) {
      return NextResponse.json({ success: false, message: "This email is already registered." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // Append to Google Sheets
    await appendToSheet(SHEET_NAMES.WAITLIST, [nameVal, companyVal, industryVal, emailVal, phoneVal, timestamp]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
