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
    let image =
      "https://res.cloudinary.com/nikkitaftw/image/upload/v1607216072/no-image_1_psllxp.png";

    try {
      if (data.Link.includes("https")) {
        const response = await fetch(
          `https://us-central1-blender-resources.cloudfunctions.net/screenshot?url=${data.Link}`
        );

        const d = await response.json();
        image = d.url;
      }
    } catch (e) {
      console.log(e);
    }

    return {
      content,
      data,
      image,
      filePath,
      lastEdited: stats.birthtime.toString(),
    };
  });

  const all = await Promise.all(allResources);
  const ordered = all.sort(
    (a, b) => new Date(b.lastEdited) - new Date(a.lastEdited)
  );
  return ordered;
};
