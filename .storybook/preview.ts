import type { Preview } from "@storybook/react";
import "../src/styles/fonts.css";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "campfire-light",
      values: [
        { name: "campfire-light", value: "#f7f8f9" },
        { name: "campfire-dark", value: "#1c1f26" },
        { name: "neutral-white", value: "#ffffff" },
        { name: "neutral-black", value: "#0a0a0a" },
      ],
    },
    options: {
      // Sidebar ordering: docs pages first, then foundations, then editorial,
      // then components. Anything else falls to the bottom alphabetically.
      storySort: {
        order: [
          "Welcome",
          "Foundations",
          ["Typography", "Color", "Spacing", "Motion"],
          "Editorial",
          "Components",
          "*",
        ],
      },
    },
  },
};

export default preview;
