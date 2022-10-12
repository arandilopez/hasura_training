import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './types/user.type';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
