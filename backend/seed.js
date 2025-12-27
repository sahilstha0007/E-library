import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.student.createMany({
    data: [
      { name: 'John Doe', email: 'john@example.com', department: 'CS' },
      { name: 'Jane Smith', email: 'jane@example.com', department: 'Math' },
    ],
    skipDuplicates: true
  });

  await prisma.book.createMany({
    data: [
      { title: 'Clean Code', author: 'Robert Martin', isbn: '11111', quantity: 5 },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '22222', quantity: 3 },
    ],
    skipDuplicates: true
  });

  console.log('Seeding completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });