import { mailOptions, transporter } from "../../config/nodemailler";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val}\n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        </head>
        <body>
          ${htmlData}
        </body>
      </html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject || "No Subject",
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
