import * as fs from 'fs';
import * as path from 'path';

export function createFile(fileName: string, fileContent: string) {
  fs.writeFileSync(
    path.resolve(fileName),
    fileContent,
    { encoding: 'utf-8' },
  );
}