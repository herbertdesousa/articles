import { FileManager } from './FileManager';

describe('FileManager', () => {
  it('should be able to insert into file', () => {
    const fileManager = new FileManager('test-database2.txt');

    fileManager.unlinkFile();

    const fileContent = 'database with data :D';

    fileManager.createFile(fileContent);

    const file = fileManager.readFile();

    expect(file).toBe(fileContent);
  });

  it('should be able to select all from file', () => {
    const fileManager = new FileManager('test-database2.txt');
  
    fileManager.unlinkFile();

    const fileContent = 'database with data :D';

    fileManager.createFile(fileContent)

    expect(fileManager.readFile()).toBe(fileContent);
  });
});