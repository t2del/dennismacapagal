import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  //site: "https://www.dennismacapagal.com",
  site: "https://t2del.github.io/dennismacapagal/",
  base: "/dennismacapagal/",
  integrations: [mdx(), sitemap(), tailwind()],
});