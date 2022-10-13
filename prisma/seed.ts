import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      name: 'Arandi Lopez',
      email: 'arandi.lopez@rxvantage.com',
      password: hashSync('test1234', 10),
    },
  });
}

seed()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
