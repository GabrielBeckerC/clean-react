module.exports = {
  roots: ['<rootDir/>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnviroment: 'none',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
