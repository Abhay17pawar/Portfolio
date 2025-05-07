import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    console.log("Email credentials:", {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS ? "Password exists" : "Password missing",
    })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: "abhaypawar0817@gmail.com", // Make sure this is the correct email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #6d28d9;">New Portfolio Contact Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    }

    // Send the email
    console.log("Attempting to send email to:", mailOptions.to)
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.response)

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
