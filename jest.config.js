module.exports = {

    moduleFileExtensions: [
        'js',
        'json',
        'vue',
    ],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    snapshotSerializers: ['jest-serializer-vue'],
};
