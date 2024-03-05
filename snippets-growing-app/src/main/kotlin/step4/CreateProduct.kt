package org.example.step4

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

    Database.insert("${product.id},${product.label},${product.price},${product.sku},${product.quantity}")

    return product
}
