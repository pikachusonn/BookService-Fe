import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Import existing Next.js + TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 2. Override rules globally
  {
    files: ["**/*.ts", "**/*.tsx"], // Optional: target only TS files
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 🔧 Turn off the warning
    },
  },
];

export default eslintConfig;
