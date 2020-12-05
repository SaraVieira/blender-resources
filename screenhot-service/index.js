exports.screenshot = async (req, res) => {
  const puppeteer = require("puppeteer");
  const { v5 } = require("uuid");
  const cloudinary = require("cloudinary").v2;
  require("dotenv").config();

  cloudinary.config({
    cloud_name: "nikkitaftw",
    api_key: "282841499577797",
    api_secret: process.env.API_CLOOUDINARY,
  });

  const {
    query: { url },
  } = req;

  if (!url) {
    res.status(500).send(
      JSON.stringify({
        message: "nor url supplied",
      })
    );
    return;
  }
  const name = v5(url, v5.URL);
  const instances = await cloudinary.search
    .expression(`resource_type:image AND public_id=${name}`)
    .max_results(1)
    .execute();

  if (instances.total_count) {
    res
      .status(200)
      .send(JSON.stringify({ url: instances.resources[0].secure_url }));
    return;
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: ["domcontentloaded", "networkidle0"],
  });

  const screenshot = await page.screenshot({ encoding: "binary" });

  await browser.close();

  const dataURI = "data:image/png;base64," + screenshot.toString("base64");

  cloudinary.uploader.upload(
    dataURI,
    { public_id: name },
    function (_, result) {
      res.status(200).send(
        JSON.stringify({
          url: result.secure_url,
        })
      );
    }
  );
};
