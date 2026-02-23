import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9()+\-\s]{7,20}$/;

// Helper function to escape CSV fields
function escapeCsvField(field: string): string {
  if (field.includes(",") || field.includes('"') || field.includes("\n")) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

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

    const dir = path.join(process.cwd(), "data");
    const filePath = path.join(dir, "wait.csv");
    await fs.mkdir(dir, { recursive: true });

    let fileExists = true;
    await fs.access(filePath).catch(async () => {
      fileExists = false;
      await fs.writeFile(filePath, "name,company,industry,email,phone,timestamp\n");
    });

    if (fileExists) {
      const content = await fs.readFile(filePath, "utf-8");
      if (!content.startsWith("name,company,industry,email,phone,timestamp")) {
        const migrated = content
          .split("\n")
          .filter(Boolean)
          .slice(1)
          .map((row) => row.split(","))
          .map((cols) => {
            if (cols.length >= 6) return cols;
            // pad legacy rows
            return [...cols, ...Array(Math.max(0, 6 - cols.length)).fill("")];
          })
          .map((cols) => cols.slice(0, 6).join(","));
        await fs.writeFile(filePath, "name,company,industry,email,phone,timestamp\n" + migrated.join("\n") + (migrated.length ? "\n" : ""));
      }
    }

    const timestamp = new Date().toISOString();
    const escapedName = escapeCsvField(nameVal);
    const escapedCompany = escapeCsvField(companyVal);
    const escapedIndustry = escapeCsvField(industryVal);
    const escapedEmail = escapeCsvField(emailVal);
    const escapedPhone = escapeCsvField(phoneVal);
    const escapedTimestamp = escapeCsvField(timestamp);
    await fs.appendFile(filePath, `${escapedName},${escapedCompany},${escapedIndustry},${escapedEmail},${escapedPhone},${escapedTimestamp}\n`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
