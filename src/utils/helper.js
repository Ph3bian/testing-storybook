export const currencyFormatter = (amount) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
    .format(amount)
    .replace("€", "");