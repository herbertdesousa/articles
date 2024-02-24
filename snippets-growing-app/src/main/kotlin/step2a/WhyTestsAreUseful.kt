package org.example.step2a

fun usageExample() {
    val workersProfit = listOf(100f, 200f, 80f, 10f)

    println(generateReportV1(workersProfit, workersProfit.sum()))
    println(generateReportV2(workersProfit, workersProfit.sum()))
}

fun generateReportV1(workersProfit: List<Float>, totalBusinessProfit: Float): List<Int> {
    val workersProfitPercentage =
        workersProfit.map { workerProfit -> (((workerProfit / workersProfit.size) % totalBusinessProfit)).toInt() }

    return workersProfitPercentage
}

fun generateReportV2(workersProfit: List<Float>, totalBusinessProfit: Float): List<Int> {
    val workersProfitPercentage =
        workersProfit.map { workerProfit -> (((workerProfit / workersProfit.size) % totalBusinessProfit)).toInt() }

    return workersProfitPercentage.map { workerProfitPercentage ->
        if (workerProfitPercentage <= 20) 0 else workerProfitPercentage
    }
}