import { Post } from '@app/posts/dto/post.type';
import { PrismaService } from '@app/prisma/prisma.service';
import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './dto/user.type';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  @ResolveField(() => [Post])
  async posts(@Parent() { id }: User) {
    return this.prisma.user.findUnique({ where: { id } }).posts();
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return this.prisma.user.create({ data: input });
  }
}
