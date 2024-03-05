package org.example.step3a

import java.io.File

data class CreateProductArgs(val label: String, val price: Float, val sku: String, val quantity: Int)

data class ProductInDatabase(val id: Number, val label: String, val price: Float, val sku: String, val quantity: Int)

fun createProduct(createProductArgs: CreateProductArgs): ProductInDatabase {
    val product = ProductInDatabase(
        (Math.random() * 1000).toInt(),
        createProductArgs.label,
        createProductArgs.price,
        createProductArgs.sku,
        createProductArgs.quantity
    )

    val previousContent =
        if (File("database.txt").exists()) File("database.txt").readText() + "\n"
        else ""

    File("database.txt").writeText(
        previousContent + "${product.id},${product.label},${product.price},${product.sku},${product.quantity}",
    )

    return product
}
