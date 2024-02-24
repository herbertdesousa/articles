package step2

import org.example.step2.CreateProductArgs
import org.example.step2.createProduct
import org.junit.jupiter.api.Test
import java.io.File
import kotlin.test.assertEquals

class CreateProductTest {
    @Test
    fun createProductTest() {
        File("database.txt").delete()

        val createdProduct1 = createProduct(CreateProductArgs("Lata de Feijão", 12.5f, "12-EF34", 5))

        assertEquals(true, File("database.txt").exists())
        assertEquals(
            "${createdProduct1.id},${createdProduct1.label},${createdProduct1.price},${createdProduct1.sku},${createdProduct1.quantity}",
            File("database.txt").readText()
        )
        assertEquals(createdProduct1.label, "Lata de Feijão")
        assertEquals(createdProduct1.price, 12.5f)
        assertEquals(createdProduct1.sku, "12-EF34")
        assertEquals(createdProduct1.quantity, 5)
    }
}