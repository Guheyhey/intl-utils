/*
  # formatPriceText 📅
  ----
  Format Price Text formats a price based on JavaScript's native INTL api

  ## Arguments 🔬
  ----
  - price
    - examples: 1.25, 30
  - locale: 5 character string including a dash
    - example: 'en-US'
  - opts
    - price options
    - example: { style: 'currency', currency: 'EUR' }

  ## Further reading 📑
  ----
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)

  ## Example usage ⚗️
  ----
  - formatPriceText(1.25)
  - formatPriceText(1.25, 'en-US', { style: 'currency', currency: 'EUR' })
*/

export default function formatPriceText (
  price,
  locale = 'en-US',
  opts = {},
) {
  const isNotANumber = isNaN(price)
  const isNotSupportingIntl = typeof Intl === 'undefined'
  return (isNotSupportingIntl || isNotANumber)
    ? price
    : new Intl.NumberFormat(locale, opts).format(price)
}
