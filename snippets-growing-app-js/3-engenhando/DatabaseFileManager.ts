import { FileManager } from "./FileManager";

export interface Product {
  id: string;
  label: string;
  price: number;
  sku: string;
  quantity: number;
}

interface InsertRequest {
  label: string;
  price: number;
  sku: string;
  quantity: number;
}

export class DatabaseFileManager {
  constructor(private fileManager: FileManager) {
    fileManager.createFile('');
  }

  private serializeToRow({
    id,
    label,
    price,
    sku,
    quantity,
  }: Product): string {
    return [id, label, price, sku, quantity].join(',');
  }

  private deserializeFromRow(row: string): Product {
    const [id, label, price, sku, quantity] = row.split(',');

    return {
      id,
      label,
      price: Number(price),
      sku,
      quantity: Number(quantity),
    };
  }

  all(): Product[] {
    const fileContent = this.fileManager.readFile();

    if (fileContent.length === 0) return []

    return fileContent.split('\n').map(this.deserializeFromRow);
  }

  insert({
    label,
    price,
    sku,
    quantity,
  }: InsertRequest): Product | null {
    const findedProductWithSameSKU = this.all().find(product => {
      return product.sku === sku;
    });

    if (findedProductWithSameSKU) {
      return null;
    }

    const product: Product = {
      id: `ID-${Math.round(Math.random() * 100)}`,
      label,
      price,
      sku,
      quantity,
    };

    const oldFileContent = this.fileManager.readFile();

    const row = this.serializeToRow(product);

    const newFileContent = oldFileContent.length === 0
      ? row
      : oldFileContent + '\n' + row;

    this.fileManager.unlinkFile();
    this.fileManager.createFile(newFileContent);

    return product;
  }
}