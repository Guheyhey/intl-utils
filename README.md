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

**To format Date**
```javascript
const IntlUtils = require('intl-utils')
const formatDateText = IntlUtils.formatDateText

formatDateText() // March 12, 2012
formateDateTest(date, 'en-US', {true, {month: 'long'}}) // 

```


