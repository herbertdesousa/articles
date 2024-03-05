// input: [100, 200, 80, 10] -> result: [ 25, 50, 20, 2 ]
function generateReportV1(workersProfit: number[], totalBusinessProfit: number): number[] {
  const workersProfitPercentage: number[] = workersProfit.map(workerProfit =>
      Math.floor((workerProfit / workersProfit.length) % totalBusinessProfit)
  );

  return workersProfitPercentage;
}

// input: [100, 200, 80, 10] -> result: [ 25, 50, 0, 0 ]
function generateReportV2(workersProfit: number[], totalBusinessProfit: number): number[] {
  const workersProfitPercentage: number[] = workersProfit.map(workerProfit =>
      Math.floor((workerProfit / workersProfit.length) % totalBusinessProfit)
  );

  return workersProfitPercentage.map(workerProfitPercentage =>
      workerProfitPercentage <= 20 ? 0 : workerProfitPercentage
  );
}
