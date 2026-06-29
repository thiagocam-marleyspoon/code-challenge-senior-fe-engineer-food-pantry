import { Controller, Get } from '@nestjs/common';
import { DataService, DataRecord } from './data.service';

@Controller('api/data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(): Promise<DataRecord[]> {
    return this.dataService.getData();
  }
}
