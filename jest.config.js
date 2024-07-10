/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
  testMatch: ["**/*.spec.tsx"],
  moduleNameMapper: { "\\.(css|less|scss|sass|svg)$": "jest-transform-stub" },
};
