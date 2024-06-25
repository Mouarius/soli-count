import eslintPoluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPoluginAstro.configs.recommended,
  { files: ["**/*.ts", "**/*.tsx", "**/*.astro"] },
];
