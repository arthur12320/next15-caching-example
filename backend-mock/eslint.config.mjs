import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {rules:{
    "prefer-arrow-callback": ["error"],
    "prefer-template": ["error"],
    "semi": ["error"],
    "quotes": ["error", "double"],
  }}
];