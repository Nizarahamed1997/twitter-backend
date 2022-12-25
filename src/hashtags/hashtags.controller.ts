import { Controller, Get } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
    @Get()
    getHashtags():string {
        return 'all hashtags obtained'
    }
    
}
