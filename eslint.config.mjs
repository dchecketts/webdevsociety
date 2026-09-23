import js from "@eslint/js";
import astroPlugin from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...astroPlugin.configs["recommended"],
  eslintConfigPrettier,
  {
    rules: {
      // Custom Rules Here
    },
  },
];
