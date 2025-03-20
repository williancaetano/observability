import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  //This functions return an JSON with a message Hello World
  @Get()
  helloWorld() {
    return "Hello World";
  }
}
