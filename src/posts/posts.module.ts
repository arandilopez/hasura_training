import { PrismaModule } from '@app/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver],
})
export class PostsModule {}
