import * as fs from 'fs';
import * as path from 'path';

export function readFile(fileName: string) {
  return fs.readFileSync(
    path.resolve(fileName),
    { encoding: 'utf-8' },
  );
}