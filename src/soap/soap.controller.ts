import { Controller, Get, Param } from '@nestjs/common';
import { SoapService } from './soap.service';

@Controller('soap')
export class SoapController {
    constructor(private readonly soapService: SoapService){}

    @Get()
    async getSoap(){
        return await this.soapService.consumeApi();
    }
}
