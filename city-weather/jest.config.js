module.exports = {
  roots: ["<rootDir>/__tests__", "<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.test.(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageReporters: ["json", "html", "text"],
  testEnvironment: "jsdom",
  verbose: true,
};
