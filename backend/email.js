const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // store this key in Vercel env

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    await sgMail.send({
      to,
      from: 'alokpatel41001@gmail.com', // must be verified in SendGrid
      subject,
      text,
      html
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email sending error:', error);
  }
};

module.exports = sendEmail;
