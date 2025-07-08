const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const projects = [
  { name: "cuisine", url: "https://cuisine-marocaine-ihg2.vercel.app/" },
  { name: "dardarkom", url: "https://dardarkom.vercel.app/" },
  { name: "anime", url: "https://anime-chi-nine.vercel.app/" },
  { name: "library", url: "https://library-mu-eight.vercel.app/" },
  { name: "Yummy", url: "https://yahya-lerhni.github.io/Yahya-Lerhni-Pf-Dom/" },
  { name: "My To Do List", url: "https://yahya-lerhni.github.io/ToDo-List/" },
  {
    name: "My First project",
    url: "https://yahya-lerhni.github.io/Yahya-Lerhni/",
  },
  { name: "E-com", url: "https://yahya-lerhni.github.io/e-com/" },
  {
    name: "Project Simple",
    url: "https://yahya-lerhni.github.io/simple-project/",
  },
  {
    name: "Array",
    url: "https://yahya-lerhni.github.io/Aymen-yahya-adam-array/",
  },
  { name: "portfolio", url: "https://my-portfolio-pearl-five-46.vercel.app/" },
  { name: "fashe-theme", url: "https://lerhni-yahya-pf-react.vercel.app/" },
  { name: "moroccanglow", url: "https://moroccan-glow.vercel.app/" },

];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  for (const project of projects) {
    const imgPath = path.join(
      __dirname,
      "src/assets/projects",
      `${project.name}.png`
    );

    // ✅ Skip if screenshot already exists
    if (fs.existsSync(imgPath)) {
      console.log(
        `⏭️ Screenshot already exists for ${project.name}, skipping...`
      );
      continue;
    }

    console.log(`📸 Capturing ${project.name}...`);
    await page.goto(project.url, { waitUntil: "networkidle2", timeout: 0 });
    await page.screenshot({ path: imgPath, fullPage: true });
    console.log(`✅ Saved to ${imgPath}`);
  }

  await browser.close();
})();
