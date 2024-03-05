package org.example.step3

import org.example.step2.CreateProductArgs
import org.example.step2.createProduct
import java.io.File

fun main() {
    File("database.txt").delete()

    // conectando ao seu client

    var labelField = ""
    var priceField = ""
    var skuField = ""
    var quantity = 0

    fun onCreateProduct(payload: CreateProductArgs) {
        createProduct(payload)
    }

    // ... usuário preenche os campos
    labelField = "Saco de Arroz 5kg"
    priceField = "24.5"
    skuField = "FF8-08G"
    quantity = 10

    // e clica no botão de criar
    onCreateProduct(CreateProductArgs(labelField, priceField.toFloat(), skuField, quantity))
}
