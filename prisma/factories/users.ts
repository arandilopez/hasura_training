import { createUserFactory } from 'prisma-factory/generated';
import { faker } from '@faker-js/faker';
import { hashSync } from 'bcrypt';
import { Prisma } from '@prisma/client';

const UserFactory = createUserFactory();

export const createUser = (data: Partial<Prisma.UserCreateInput> = {}) => {
  // Default data + input data to customize
  return UserFactory.create({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: hashSync('test1234', 10),
    ...data,
  });
};
