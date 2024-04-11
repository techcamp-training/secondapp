const { prisma, resetDatabase } = require('./testUtils');

afterAll(async () => {
  await resetDatabase();
  await prisma.$disconnect();
});

const { createPost } = require('./createPost');

describe('新規投稿フローのテスト', () => {

  it('新規投稿してトップページに遷移', async () => {
    await createPost(page, 'テスト投稿');
  });
});
