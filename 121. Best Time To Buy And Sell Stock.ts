function maxProfit(prices: number[]): number {
  let left: number = 0;
  let right: number = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
}
