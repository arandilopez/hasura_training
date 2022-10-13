import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../users/dto/user.type';
import { PrismaService } from '../prisma/prisma.service';
import { Post } from './dto/post.type';
import { CreatePostInput } from './dto/create-post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => Post)
  async post(@Args('id', { type: () => ID }) id: string) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  @ResolveField(() => User)
  async user(@Parent() { id }: Post) {
    return this.prisma.post.findUnique({ where: { id } }).user();
  }

  @Query(() => [Post])
  async posts() {
    return this.prisma.post.findMany();
  }

  @Mutation(() => Post)
  async createPost(@Args('input') input: CreatePostInput) {
    return this.prisma.post.create({ data: input });
  }
}
