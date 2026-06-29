import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { parse } from 'csv-parse/sync';

export type DataRecord = Record<string, string>;

@Injectable()
export class DataService implements OnModuleInit {
  private records: DataRecord[] = [];

  async onModuleInit(): Promise<void> {
    await this.load();
  }

  private async load(): Promise<void> {
    const csvPath = join(process.cwd(), 'src', 'AUHUB.csv');
    const content = await readFile(csvPath, 'utf-8');
    this.records = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });
  }

  async getData(): Promise<DataRecord[]> {
    // Artificial delay to simulate a slow data source.
    await new Promise((resolve) => setTimeout(resolve, 10_000));
    return this.records;
  }
}
