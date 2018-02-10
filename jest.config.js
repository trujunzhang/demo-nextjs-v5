module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testRegex: '\\.test\\.(t|j)s(x)',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(scss|svg)$': '<rootDir>/__mocks__/empty-module.js'
  },
  collectCoverageFrom: [
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '!server.js',
    '**/*.{js,jsx,ts,tsx}',
    '!coverage/**',
    '!pages/redux*',
    '!redux/enthusiasm/reducers/**',
    '!redux/store/**'
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'typescript-babel-jest'
  }
}
