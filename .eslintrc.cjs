// module.exports = {
//   env: {
//     node: true,
//   },
//   extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
//   rules: {
//     "no-unused-vars": "off",
//     "no-undef": "off",
//     "vue/no-unused-components": "off",
//   },
// };

/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],

  parserOptions: {
    ecmaVersion: "latest",
  },
};
