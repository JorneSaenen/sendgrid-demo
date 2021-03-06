import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const data = req.body;
  const msg = {
    from: process.env.SENDGRID_FROM_EMAIL,
    template_id: process.env.SENDGRID_TEMPLATE_ID,
    personalizations: [
      {
        to: [
          {
            email: process.env.SENDGRID_TO_EMAIL,
          },
          {
            email: data.email,
          },
        ],
        dynamic_template_data: {
          ...data,
          date: new Date().toLocaleDateString("nl-BE"),
        },
      },
    ],
  };
  JSON.stringify(msg.personalizations);
  try {
    await sgMail.send(msg);
    res.status(201).json({ message: "Email succesfully send!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send the email." });
  }
}
