exports.screenshot = async (req, res) => {
  const puppeteer = require("puppeteer");
  const { v5 } = require("uuid");
  require("dotenv").config();
  const { Storage } = require("@google-cloud/storage");
  const imagemin = require("imagemin");
  const imageminJpegtran = require("imagemin-jpegtran");
  const imageminPngquant = require("imagemin-pngquant");

  const bucketName = "screenshots_blender_resources";
  const getFile = async (filename) => {
    const [metadata] = await storage
      .bucket(bucketName)
      .file(filename)
      .getMetadata();

    return metadata;
  };

  const storage = new Storage({ keyFilename: "key.json" });

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
  const name = `${v5(url, v5.URL)}.png`;
  try {
    const metadata = await getFile(name);

    if (metadata.name) {
      res.status(200).send(
        JSON.stringify({
          url: `https://storage.googleapis.com/${metadata.bucket}/${metadata.name}`,
        })
      );
      return;
    }
    // eslint-disable-next-line no-empty
  } catch {}

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

  try {
    const screen = await imagemin.buffer(screenshot, {
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });
    await storage.bucket(bucketName).file(name).save(screen);
    const newFileMetadata = await getFile(name);

    res.status(200).send(
      JSON.stringify({
        url: `https://storage.googleapis.com/${newFileMetadata.bucket}/${newFileMetadata.name}`,
      })
    );
  } catch (e) {
    console.log(e);
    res.status(500).send(
      JSON.stringify({
        message: "There was a problem creating the file",
      })
    );
  }
};
