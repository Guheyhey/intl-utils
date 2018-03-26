const formatPriceText = require('../../dist/formatPriceText')

const formatPriceTextScenario = [
  {
    locale: 'en-US',
    name: 'test US no defaults',
    price: 1.25,
    opts: {},
    expected: '1.25',
  },
  {
    locale: 'en-US',
    name: 'test US with currency',
    price: 1.25,
    opts: { style: 'currency', currency: 'USD' },
    expected: '$1.25',
  },
  {
    locale: 'en-US',
    name: 'test US with currency',
    price: 100.25,
    opts: { style: 'currency', currency: 'USD' },
    expected: '$100.25',
  },
  {
    locale: 'de-DE',
    name: 'test DE no defaults',
    price: 100.25,
    opts: {},
    expected: '100,25',
  },
  {
    locale: 'de-DE',
    name: 'test DE with currency',
    price: 123456.789,
    opts: { style: 'currency', currency: 'EUR' },
    expected: '123.456,79 €',
  },
  {
    locale: 'jp-JP',
    name: 'test JP with currency',
    price: 123456.789,
    opts: { style: 'currency', currency: 'JPY' },
    expected: '¥123,457',
  },
  {
    locale: 'en-IN',
    name: 'test en-IN with currency',
    price: 1234567.888,
    opts: { maximumSignificantDigits: 3 },
    expected: '12,30,000',
  },
  {
    locale: 'zh-CN',
    name: 'test CN with currency',
    price: 1234567.888,
    opts: { style: 'currency', currency: 'CNY' },
    expected: '￥1,234,567.89',
  },
]

formatPriceTextScenario.forEach(function(scenario) {
  test(scenario.name, function() {
    expect(formatPriceText(scenario.price, scenario.locale, scenario.opts)).toBe(scenario.expected)
  })
})