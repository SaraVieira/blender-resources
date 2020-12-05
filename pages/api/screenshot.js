const chromium = require("chrome-aws-lambda");
const { v5 } = require("uuid");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "nikkitaftw",
  api_key: "282841499577797",
  api_secret: process.env.CLOUDINARY_KEY,
});

export default async function handler(req, res) {
  const {
    query: { url },
  } = req;
  const name = v5(url, v5.URL);

  if (!url) {
    res.status(400).end(JSON.stringify({ message: "Page URL not defined" }));
    return;
  }
  const instances = await cloudinary.search
    .expression(`resource_type:image AND public_id=${name}`)
    .max_results(1)
    .execute();

  if (instances.total_count) {
    res.status(200).json({ url: instances.resources[0].secure_url });

    return;
  }

  const browser = await chromium.puppeteer.launch({
    // Required
    executablePath: await chromium.executablePath,

    // Optional
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.goto(url);

  const screenshot = await page.screenshot({ encoding: "binary" });

  await browser.close();

  res.statusCode = 200;
  const dataURI = "data:image/png;base64," + screenshot.toString("base64");

  cloudinary.uploader.upload(
    dataURI,
    { public_id: name },
    function (_, result) {
      res.status(200).json({ url: result.secure_url });
    }
  );
}
