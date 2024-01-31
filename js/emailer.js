const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const APP_PASSWORD = process.env.APP_PASSWORD;

const transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // type: 'OAuth2',
    user: EMAIL_ADDRESS,
    pass: APP_PASSWORD,
  }
});

const emailer = async (email, name, message) => {
  const mailOptions = {
    to: EMAIL_ADDRESS,
    subject: "Sent from website",
    html: message + "<br><br>" + "From: <strong>" + name + "</strong><br>Email: " + email 
  };

  console.log('Email Function Triggered');
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return 1; // Success
  } catch (error) {
    console.error('Error sending email:', error);
    return 0; // Error
  }
}

module.exports = {
  emailer
};
