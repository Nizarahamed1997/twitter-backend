import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    getPosts() : string{
        return 'All posts obtained'
    }
    @Post('/')
    userPost(@Param() params) : string{
        return 'Post posted'
    }
    @Delete('/:postid')
    deletePost(@Param() params) : string{
        return `Deleted post ${params.postid}`
    }
}

