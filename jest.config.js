module.exports = {
  clearMocks: true,
  verbose: true,
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: ".test.ts$",
  moduleFileExtensions: ["js", "ts"],
  collectCoverage: true,
  coverageReporters: ["text", "html", "lcov"]
};
