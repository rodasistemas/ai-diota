const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/components/(.*)$": "<rootDir>/src/components/$1",
    "@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
