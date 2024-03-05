import * as fs from 'fs';
import * as path from 'path';

export class FileManager {
  private filePath: string

  constructor(fileName: string) {
    this.filePath = path.resolve(fileName)
  }

  createFile(fileContent: string) {
    fs.writeFileSync(this.filePath, fileContent, { encoding: 'utf-8' });
  }

  readFile(): string {
    if (!fs.existsSync(this.filePath)) {
      return '';
    }

    return fs.readFileSync(this.filePath, { encoding: 'utf-8' });
  }

  unlinkFile() {
    if (fs.existsSync(this.filePath)) {
      fs.unlinkSync(this.filePath);
    }
  }
}