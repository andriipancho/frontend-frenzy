export function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}
