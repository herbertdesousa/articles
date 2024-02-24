package org.example.step3a

import java.io.File

fun listProducts(): List<ProductInDatabase> {
    val databaseText = File("database.txt").readText()

     return databaseText.split("\n").map { row ->
        val (id, label, price, sku, quantity) = row.split(",")

        ProductInDatabase(id.toInt(), label, price.toFloat(), sku, quantity.toInt())
    }
}
