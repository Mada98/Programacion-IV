module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/controllers/**/*.js',
    'src/routes/**/*.js',
    'src/middleware/**/*.js',
    '!**/node_modules/**'
  ],
  testPathIgnorePatterns: ['/node_modules/', '05-file-upload'],
  testMatch: [
    '**/test/**/01-*.test.js',
    '**/test/**/02-*.test.js',
    '**/test/**/03-*.test.js',
    '**/test/**/04-*.test.js',
    '**/test/**/06-*.test.js',
    '**/test/**/07-*.test.js',
    '**/test/**/08-*.test.js'
  ],
  verbose: true,
  testTimeout: 10000,
  setupFilesAfterEnv: ['<rootDir>/test/setup.js']
};
