import { Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() : string {
        return 'All users returned'
    }
    @Get('/:username')
    getUserNames(@Param() params) : string {
        return `Username with the name ${params.username}`
    }
    @Patch('/userid/:userid')
    updatedUserId(@Param() params) : string {
        return `User id updated ${params.userid}`
    }
    @Put('/:userid/follow')
    followUser(@Param() params) : string {
        return `User follow ${params.userid}`
    }
    @Delete('/;userid/unfollow')
    UnfollowUser(@Param() params) : string{
        return `User unfollowed ${params.userid}`
    }
}
