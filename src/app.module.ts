import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, HashtagsController, PostsController],
  providers: [AppService],
})
export class AppModule {}
