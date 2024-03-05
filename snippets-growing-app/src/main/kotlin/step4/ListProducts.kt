package org.example.step4

fun listProducts(): List<ProductInDatabase> {
    val databaseText = Database.select()

    if (databaseText.isBlank()) return emptyList()

     return databaseText.split("\n").map { row ->
        val (id, label, price, sku, quantity) = row.split(",")

        ProductInDatabase(id.toInt(), label, price.toFloat(), sku, quantity.toInt())
    }
}
