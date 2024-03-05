import * as fs from 'fs';
import * as path from 'path';

import { createFile } from "./createFile";

describe("createFile", () => {
  it('should be able to insert into database', () => {
    if (fs.existsSync(path.resolve('test-database1.txt'))) {
      fs.unlinkSync(path.resolve('test-database1.txt'));
    }

    const fileContent = 'database with data :D';

    createFile('test-database1.txt', fileContent);

    const file = fs.readFileSync(
      path.resolve('test-database1.txt'),
      { encoding: 'utf-8' },
    );

    expect(file).toBe(fileContent);
  });
});