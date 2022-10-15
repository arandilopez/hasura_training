// import { createUser } from './factories/users';
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  if ((await prisma.user.count()) > 0) {
    await prisma.user.create({
      data: {
        name: 'Arandi Lopez',
        email: 'arandi@test.com',
        password: hashSync('test1234', 10),
      },
    });
  }
}

seed()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
