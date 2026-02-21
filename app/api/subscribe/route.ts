import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9()+\-\s]{7,20}$/; // basic phone validation

export async function POST(req: Request) {
  try {
    const { email, phone } = await req.json();
    const emailValue = typeof email === "string" ? email.trim() : "";
    const phoneValue = typeof phone === "string" ? phone.trim() : "";

    if (!emailRegex.test(emailValue)) {
      return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
    }
    if (!phoneValue || !phoneRegex.test(phoneValue)) {
      return NextResponse.json({ success: false, message: "Invalid phone number" }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data");
    const filePath = path.join(dir, "subscribers.csv");

    await fs.mkdir(dir, { recursive: true });

    // Ensure header includes phone; migrate if needed.
    let fileExists = true;
    await fs.access(filePath).catch(async () => {
      fileExists = false;
      await fs.writeFile(filePath, "email,phone,timestamp\n");
    });

    if (fileExists) {
      const content = await fs.readFile(filePath, "utf-8");
      const [header, ...rows] = content.split("\n");
      if (header.trim() !== "email,phone,timestamp") {
        const migrated = ["email,phone,timestamp"];
        for (const row of rows) {
          if (!row.trim()) continue;
          const parts = row.split(",");
          if (parts.length === 2) {
            migrated.push(`${parts[0]},,${parts[1]}`);
          } else {
            migrated.push(row);
          }
        }
        await fs.writeFile(filePath, migrated.join("\n") + "\n");
      }
    }

    const timestamp = new Date().toISOString();
    await fs.appendFile(filePath, `${emailValue},${phoneValue},${timestamp}\n`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
