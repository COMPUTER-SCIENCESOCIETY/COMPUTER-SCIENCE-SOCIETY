import nodemailer from "nodemailer";
import { google } from "googleapis";
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
import dotenv from "dotenv";
dotenv.config();

const { G_CLIENT_ID, G_CLIENT_SECRET, G_REFRESH_TOKEN, ADMIN_EMAIL } =
  process.env;

const oauth2client = new OAuth2(
  G_CLIENT_ID,
  G_CLIENT_SECRET,
  G_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

const sendEmailRegister = (to, url, text) => {
  oauth2client.setCredentials({
    refresh_token: G_REFRESH_TOKEN,
  });
  const accessToken = oauth2client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: ADMIN_EMAIL,
      clientId: G_CLIENT_ID,
      clientSecret: G_CLIENT_SECRET,
      refreshToken: G_REFRESH_TOKEN,
      accessToken,
    },
    secure: true,
  });
  const mailOptions = {
    from: ADMIN_EMAIL,
    to: to,
    subject: "Forgot Password",
    html: `
	<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }
        h1 {
            color: #333333;
            margin-bottom: 10px;
        }
        .otp {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .otp-code {
            font-size: 36px;
            color: #333333;
            margin: 0;
        }
        p {
            color: #777777;
            margin: 10px 0;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 0 0 10px 10px;
        }
        .imagestyle{
        width:50px;
        height:50px
        }
    </style>
</head>
<body>
    <div class="container">
    <img src="https://firebasestorage.googleapis.com/v0/b/itsmembers.appspot.com/o/itsl.png?alt=media&token=74ad54ae-b2a8-462b-bb3f-353afd380ea5" alt="loading"  class="imagestyle"/>
        <h1>ITS TEAMS</h1>
        <p>Your One-Time Password (OTP)</p>
        <div class="otp">
            <p class="otp-code">${url}</p>
        </div>
        <p>Please do not share this OTP with anyone. It is valid for a single use only.</p>
        <p>If you didn't request this OTP, please ignore this email.</p>
    </div>
    <div class="footer">
        <p>This is an automated email. Please do not reply.</p>
    </div>
</body>
</html>`,
  };
  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) return err;
    return info;
  });
};

export { sendEmailRegister };
