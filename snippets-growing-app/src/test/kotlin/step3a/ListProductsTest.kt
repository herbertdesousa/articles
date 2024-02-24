package step3a

import org.example.step3a.CreateProductArgs
import org.example.step3a.createProduct
import org.example.step3a.listProducts
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import java.io.File

class ListProductsTest {
    @Test
    fun listProductsTest() {
        File("database.txt").delete()

        val createdProduct1 = createProduct(CreateProductArgs("Lata de Feijão", 2.5f, "12-EF34", 5))
        val createdProduct2 = createProduct(CreateProductArgs("Saco de Arroz", 24.5f, "FF8-08G", 10))
        val createdProduct3 = createProduct(CreateProductArgs("Like no Post", 0.0f, "Não Custa Nada", 100000))

        val products = listProducts()

        assertEquals(3, products.size)
        assertEquals(products[0].label, createdProduct1.label)
        assertEquals(products[1].label, createdProduct2.label)
        assertEquals(products[2].label, createdProduct3.label)
    }
}