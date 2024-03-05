package org.example.step4

import java.io.File

fun main() {
    Database.drop()

    // conectando ao seu client

    createProduct(CreateProductArgs("Lata de Feijão", 2.5f, "12-EF34", 5))
    createProduct(CreateProductArgs("Saco de Arroz", 24.5f, "FF8-08G", 10))
    createProduct(CreateProductArgs("Like no Post", 0.0f, "Não Custa Nada", 100000))

    var productsList: List<ProductInDatabase> = emptyList()

    fun fetchProducts() {
        productsList = listProducts()
    }

    fun onAppStart() {
        fetchProducts()
    }

    onAppStart()

    productsList.map {
        // renderiza em tela
    }
}
