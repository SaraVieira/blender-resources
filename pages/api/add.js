var Airtable = require("airtable");

export default async function handler(req, res) {
  var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
    "appL1JQ6xXVzTca6S"
  );
  const { name, link, description, category } = JSON.parse(req.body);

  base("add resources").create(
    [
      {
        fields: {
          name,
          description,
          category,
          link,
        },
      },
    ],
    function (err, records) {
      if (err) {
        res.status(500).end(
          JSON.stringify({
            err,
          })
        );
        return;
      }
      res.status(200).end(
        JSON.stringify({
          records,
        })
      );
    }
  );
}
