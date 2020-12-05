import glob from "glob";
import fs from "fs";
import matter from "gray-matter";

export const PATHS = glob
  .sync("posts/**/*")
  .filter((a) => fs.lstatSync(a).isFile());
export const getAllResources = async (noImage) => {
  const allResources = PATHS.map(async (filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    var stats = fs.statSync(filePath);
    if (noImage) {
      return {
        content,
        data,
        filePath,
      };
    }
    let image = null;
    try {
      const response = await fetch(
        `https://us-central1-blender-resources.cloudfunctions.net/screenshot?url=${data.Link}`
      );

      const d = await response.json();
      image = d.url;
      // eslint-disable-next-line no-empty
    } catch (e) {
      console.log(e);
    }

    return {
      content,
      data,
      image,
      filePath,
      lastEdited: stats.mtime.toString(),
    };
  });

  const all = await Promise.all(allResources);
  const ordered = all.sort(
    (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited)
  );
  return ordered;
};
