function maxProfit(prices: number[]): number {
  let maximumProfit: number = 0;
  let rightPointer: number = 0;

  for (let leftPointer = 1; leftPointer < prices.length; leftPointer++) {
    const profit = prices[leftPointer] - prices[rightPointer];

    if (profit < 0) {
      rightPointer = leftPointer;
    }

    if (profit > maximumProfit) {
      maximumProfit = profit;
    }
  }

  return maximumProfit;
}
