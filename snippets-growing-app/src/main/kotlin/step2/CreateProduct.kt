package org.example.step2

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

    File("database.txt").writeText(
        "${product.id},${product.label},${product.price},${product.sku},${product.quantity}",
    )

    return product
}
