import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const { searchParams } = new URL(url);
  const title = searchParams.get("title") || "Hello Prompt";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                marginBottom: "40px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#2563eb",
                      marginRight: "20px",
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#2563eb",
                      fontFamily: "sans-serif",
                    },
                    children: "Hello Prompt",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 70,
                fontWeight: 900,
                color: "#1f2937",
                lineHeight: 1.2,
                fontFamily: "sans-serif",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              },
              children: title,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    },
  );
};
