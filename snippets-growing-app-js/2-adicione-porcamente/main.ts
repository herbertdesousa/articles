import { FileManager } from "./FileManager";

function main() {
  const database = new FileManager('database.txt');

  // ----
  // id, label, preço, SKU, quantidade
  const row1 = 'ID1,Lata de Feijão,12.00,001,1'
  const row2 = 'ID2,Pote de Algodão,4.50,002,10'
  
  const rowsV1 = row1 + '\n' + row2;

  database.createFile(rowsV1);
  console.log(database.readFile());
  // ID1,Lata de Feijão,12.00,001,1
  // ID2,Pote de Algodão,4.50,002,10
  // ----

  database.unlinkFile();

  // ----
  const row3 = 'ID3,Saco de Arroz,24.00,004,5'

  const rowsV2 = rowsV1 + '\n' + row3;

  database.createFile(rowsV2);
  console.log(database.readFile());
  // ID1,Lata de Feijão,12.00,001,1
  // ID2,Pote de Algodão,4.50,002,10
  // ID3,Saco de Arroz,24.00,004,5
  // ----

  database.unlinkFile();

  // ----
  const hasInclude003Sku = database.readFile().includes('003')

  if (!hasInclude003Sku) {
    const row4 = 'ID4,Saco de Arroz 2,24.00,003,5'

    const rowsV3 = rowsV2 + '\n' + row4;

    database.createFile(rowsV3);
    console.log(database.readFile());
    // ID1,Lata de Feijão,12.00,001,1
    // ID2,Pote de Algodão,4.50,002,10
    // ID3,Saco de Arroz,24.00,004,5
    // ID4,Saco de Arroz 2,24.00,003,5
  }
  // ----
}

main();