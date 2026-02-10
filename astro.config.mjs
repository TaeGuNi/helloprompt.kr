// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { visit } from "unist-util-visit";

function rehypeWrap() {
  /** @param {any} tree */
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      // 1. 코드 블럭 (pre) 감싸기
      if (node.tagName === "pre") {
        if (
          parent &&
          parent.tagName === "div" &&
          parent.properties.className?.includes("code-wrapper")
        ) {
          return;
        }

        const wrapper = {
          type: "element",
          tagName: "div",
          properties: { className: ["code-wrapper"] },
          children: [node],
        };

        parent.children[index] = wrapper;
      }

      // 2. 인용구 (blockquote) 감싸기
      if (node.tagName === "blockquote") {
        if (
          parent &&
          parent.tagName === "div" &&
          parent.properties.className?.includes("quote-wrapper")
        ) {
          return;
        }

        const wrapper = {
          type: "element",
          tagName: "div",
          properties: { className: ["quote-wrapper"] },
          children: [node],
        };

        parent.children[index] = wrapper;
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://helloprompt.kr",
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Hello Prompt",
        short_name: "HelloPrompt",
        description: "AI가 낯선 당신을 위한 가장 친절한 가이드",
        theme_color: "#030303",
        background_color: "#030303",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-icon.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/pwa-icon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{html,js,css,png,svg,ico}"],
        navigateFallback: null,
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeWrap],
  },
});
