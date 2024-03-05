import * as fs from 'fs';
import * as path from 'path';

import { readFile } from "./readFile";
import { createFile } from './createFile';

describe("readFile", () => {
  it('should be able to select products from database', () => {
    if (fs.existsSync(path.resolve('test-database1.txt'))) {
      fs.unlinkSync(path.resolve('test-database1.txt'));
    }

    const fileContent = 'database with data :D';

    createFile('test-database1.txt', fileContent)

    expect(readFile('test-database1.txt')).toBe(fileContent);
  });
});