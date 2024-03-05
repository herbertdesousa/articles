import { DatabaseFileManager } from './DatabaseFileManager';
import { FileManager } from './FileManager';

describe('DatabaseFileManager', () => {
  it('should be able to insert product row into database', () => {
    const fileManager = new FileManager('test-database3.txt');
    
    fileManager.unlinkFile();

    const databaseFileManager = new DatabaseFileManager(fileManager);

    expect(databaseFileManager.all().length).toBe(0);

    const product = databaseFileManager.insert({
      label: 'Saco de Arroz',
      price: 24.00,
      sku: '002',
      quantity: 10,
    });

    expect(product).toEqual({
      id: product?.id,
      label: 'Saco de Arroz',
      price: 24.00,
      sku: '002',
      quantity: 10,
    });
    expect(databaseFileManager.all().length).toBe(1);

    const product2 = databaseFileManager.insert({
      label: 'Lata de Feijão',
      price: 12.00,
      sku: '001',
      quantity: 1,
    });

    expect(product2).toEqual({
      id: product2?.id,
      label: 'Lata de Feijão',
      price: 12.00,
      sku: '001',
      quantity: 1,
    });
    expect(databaseFileManager.all().length).toBe(2);
  });

  it('should not be able to insert product row with same sku', () => {
    const fileManager = new FileManager('test-database3.txt');
    
    fileManager.unlinkFile();

    const databaseFileManager = new DatabaseFileManager(fileManager);

    expect(databaseFileManager.all().length).toBe(0);

    const product = databaseFileManager.insert({
      label: 'Lata de Feijão',
      price: 12.00,
      sku: '001',
      quantity: 1,
    });

    expect(product).toEqual({
      id: product?.id,
      label: 'Lata de Feijão',
      price: 12.00,
      sku: '001',
      quantity: 1,
    });
    expect(databaseFileManager.all().length).toBe(1);

    const product2 = databaseFileManager.insert({
      label: 'Saco de Arroz',
      price: 24.00,
      sku: '001',
      quantity: 10,
    });

    expect(product2).toBe(null);
    expect(databaseFileManager.all().length).toBe(1);
  });
});