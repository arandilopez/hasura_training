import { createUser } from '@factories/users';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  if ((await prisma.user.count()) > 0) {
    await createUser({ name: 'Arandi Lopez' });
  }
}

seed()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
