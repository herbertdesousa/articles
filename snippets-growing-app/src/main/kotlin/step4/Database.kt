package org.example.step4

import java.io.File

object Database {
    private const val FILENAME = "database.csv"

    fun drop() {
        File(FILENAME).delete()
    }

    fun checkExists(): Boolean = File(FILENAME).exists()

    fun select(): String {
        if (!checkExists()) return ""

        return File(FILENAME).readText()
    }

    fun insert(row: String): String {
        val previousContent = select().let { if (it.isNotBlank()) { it + "\n" } else it }

        val data = previousContent + row

        File(FILENAME).writeText(data)

        return data
    }
}