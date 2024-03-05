package step4

import org.example.step4.CreateProductArgs
import org.example.step4.Database
import org.example.step4.createProduct
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class CreateProductTest {
    @Test
    fun createProductTest() {
        Database.drop()

        val createdProduct1 = createProduct(CreateProductArgs("Lata de Feijão", 12.5f, "12-EF34", 5))

        val createdProduct2 = createProduct(CreateProductArgs("Saco de Arroz", 24.5f, "FF8-08G", 10))

        assertEquals(true, Database.checkExists())
        assertEquals(
            "${createdProduct1.id},${createdProduct1.label},${createdProduct1.price},${createdProduct1.sku},${createdProduct1.quantity}"
                    + "\n" +
                    "${createdProduct2.id},${createdProduct2.label},${createdProduct2.price},${createdProduct2.sku},${createdProduct2.quantity}",
            Database.select()
        )
        assertEquals(createdProduct1.label, "Lata de Feijão")
        assertEquals(createdProduct1.price, 12.5f)
        assertEquals(createdProduct1.sku, "12-EF34")
        assertEquals(createdProduct1.quantity, 5)

        assertEquals(createdProduct2.label, "Saco de Arroz")
        assertEquals(createdProduct2.price, 24.5f)
        assertEquals(createdProduct2.sku, "FF8-08G")
        assertEquals(createdProduct2.quantity, 10)
    }
}