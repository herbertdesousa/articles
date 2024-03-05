import { DatabaseFileManager } from "./DatabaseFileManager";
import { FileManager } from "./FileManager";

function main() {
  const fileManager = new FileManager('database.txt');
  const database = new DatabaseFileManager(fileManager);

  // vai ser inserido
  database.insert({
    label: 'Saco de Arroz',
    price: 24.00,
    sku: '001',
    quantity: 10,
  });

  // vai ser inserido
  database.insert({
    label: 'Lata de Feijão',
    price: 12.00,
    sku: '002',
    quantity: 1,
  });

  // não vai ser inserido por causa do 'sku'
  database.insert({
    label: 'Lata de Feijão',
    price: 12.00,
    sku: '002',
    quantity: 1,
  });

  console.log(database.all());
}

main();