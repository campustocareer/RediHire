import type { Handler } from "@netlify/functions";
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

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "redihire2025@gmail.com",
        pass: "bzra nlmb ufso cgvy", // App password (safe way)
      },
    });

    const mailOptions = {
      from: "redihire2025@gmail.com",
      to: "redihire2025@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Mobile: ${data.mobile}
        Description: ${data.description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong. Please try again later." }),
    };
  }
};

export { handler };
