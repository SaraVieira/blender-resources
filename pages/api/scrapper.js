const ogs = require("open-graph-scraper");

export default async function handler(req, res) {
  const {
    query: { url },
  } = req;
  const { result } = await ogs({ url });

  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  const { ogImage, ogTitle, ogUrl, ogDescription } = result;
  res.end(
    JSON.stringify({
      results: {
        image: !ogImage ? {} : Array.isArray(ogImage) ? ogImage[0] : ogImage,
        title: ogTitle,
        url: ogUrl,
        description: ogDescription,
      },
    })
  );
}
