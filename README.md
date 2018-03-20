<h1 align="center">JS Intl Utils</h1>
<h5 align="center">JS Intl utilities to format price and date for different regions.</h5>
<h5 align="center">For more information about Intl, please check <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">Intl</a></h5>


---

<h2 id="usage">Using Intl Utils</h2>

Installing NPM:

```bash
npm install
```
---

<h2 id="examples">Examples</h2>

### formatDateText Arguments 🔬
  ----
  - date: date, can be a string or number
    - examples: new Date(), Mar 15, 2012
  - locale: 5 character string including a dash
    - example: 'en-US'
  - props: {object} with show ordinal (bool) and opts {object}
  - showOrdinal: bool, true or false
    - example: false = 2, 19, true = 2nd, 19th
  - opts: {object}
    - example: formateDateTest(date, 'en-US', { props, {month: 'short', day: 'numeric'}). 
    - For more options, please check <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat">date options</a>
  - Where are the defensive checks?
    - If needed, they'll be added! 🤞

**To format Date**
```javascript
import formatDateText from 'intl-utils'
const formatDateText = IntlUtils.formatDateText

formatDateText() // March 12, 2012
formatDateText(date, 'en-US', {true, {month: 'long'}}) // 

```
### formatPriceText Arguments 🔬
----
  - price
    - examples: 1.25, 30
  - locale: 5 character string including a dash
    - example: 'en-US'
  - opts
    - price options
    - example: { style: 'currency', currency: 'EUR' }
    - more options please check <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat#Parameters"> number options</a>

**To format Prie**
```javascript
import formatPriceText from 'intl-utils'
const formatPriceText = IntlUtils.formatPriceText

formatPriceText( 123, 'en-US', { style: 'currency', currency: 'USD' }) // $123
formatPriceText( 123456.789, 'de-DE', { style: 'currency', currency: 'EUR' } ) // 123.456,79 €
formatPriceText( 1234567.888, 'zh-CN', { style: 'currency', currency: 'CNY' }) // ￥1,234,567.89

```
---

<h2 id="tests">Tests</h2>

Run test script

```bash
npm run test
```






