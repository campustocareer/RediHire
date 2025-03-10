import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    if (!data.name || !data.email || !data.mobile || !data.description) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // ✅ Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "redihire2025@gmail.com", // ✅ Your Gmail
        pass: "xhbc qvrf tjtg xuke", // ✅ Your App Password
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: data.email, // ✅ Taking sender's email from form input
      to: "redihire2025@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Mobile: ${data.mobile}
        Description: ${data.description}
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

export { handler };
