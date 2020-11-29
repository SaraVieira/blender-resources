import glob from "glob";
import fs from "fs";
import matter from "gray-matter";
import ogs from "open-graph-scraper";

export const PATHS = glob
  .sync("posts/**/*")
  .filter((a) => fs.lstatSync(a).isFile());
export const getAllResources = async (noOg) => {
  const allResources = PATHS.map(async (filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    var stats = fs.statSync(filePath);
    if (noOg) {
      return {
        content,
        data,
        filePath,
      };
    }

    const { result } = await ogs({ url: data.Link });

    const {
      ogImage = {},
      ogTitle = "",
      ogUrl = "",
      ogDescription = "",
    } = result;

    return {
      content,
      data,
      filePath,
      og: {
        image: !ogImage ? {} : Array.isArray(ogImage) ? ogImage[0] : ogImage,
        title: ogTitle.toString(),
        url: ogUrl?.toString(),
        description: ogDescription?.toString(),
      },
      lastEdited: stats.mtime.toString(),
    };
  });

  const all = await Promise.all(allResources);
  const ordered = all.sort(
    (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited)
  );
  return ordered;
};
