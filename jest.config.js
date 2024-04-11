module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
      launchOptions: {
        headless: false, // ヘッドレスモードを無効化
      },
    },
  },
};
