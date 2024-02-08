export function formatCurrency(value: number) {
  return value.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })
}