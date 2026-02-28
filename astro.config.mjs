// @ts-check

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
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

      // 3. 이미지 리소스 최적화 (Lazy Load & Async Decode)
      if (node.tagName === "img") {
        node.properties = node.properties || {};
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/about": "/ko/about",
    "/contact": "/ko/contact",
    "/privacy": "/ko/privacy",
    "/terms": "/ko/terms",
  },

  output: "server",

  adapter: vercel({
    isr: true,
  }),

  site: "https://helloprompt.kr",

  integrations: [
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
    // remarkPlugins: [remarkStrictTemplate], // Disabled: Causes synchronous event loop blocking on heavy multi-language builds
    rehypePlugins: [rehypeWrap],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
