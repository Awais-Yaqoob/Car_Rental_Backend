// services/emailService.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "mail.openjavascript.info",
  // port: 465,
  // secure: true,
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "wojog81908@newcupon.com", // replace with your email
    pass: "Lahore786", // replace with your email password
  },
});

const sendBookingConfirmationEmail = async (booking) => {
  const mailOptions = {
    from: "OpenJavaScript <unionwolrdbuilder@gmail.com>",
    to: "usmanafzal3121.ua8@gmail.com",
    subject: "Car Booking Confirmation",
    text: `Thank you for booking with us. Your booking details:\n${JSON.stringify(
      booking,
      null,
      2
    )}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = {
  sendBookingConfirmationEmail,
};
