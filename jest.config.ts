// jest.config.ts

export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(css|gif|ttf|eot|svg|pn)$': '<rootDir>/src/test/__mocks__/fileMock.js'
    },
}