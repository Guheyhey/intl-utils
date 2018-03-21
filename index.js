/**
  intl-utils - 
  @version v1.0.0
  @link https://github.com/Guheyhey/intl-utils#readme
  @author jest --coverage
  @license ISC
**/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ordinal = _interopDefault(require('ordinal'));

/*
  # formatDatetext 📅
  ----
  Format Date Text formats a date based on JavaScript's native Date and INTL apis

  ## Arguments 🔬
  ----
  - date: date, can be a string or number
    - examples: new Date(), Mar 15, 2012
  - locale: 5 character string including a dash
    - example: 'en-US'
  - props: {object} with show ordinal (bool) and opts {object}
  - showOrdinal: bool, true or false
    - example: false = 2, 19, true = 2nd, 19th
  - opts: {object}
    - example: formateDateTest(date, 'en-US', { props, {month: 'short', day: 'numeric'})
  - Where are the defensive checks?
    - If needed, they'll be added! 🤞

  ## Further reading 📑
  ----
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
  - [Ordinal](https://github.com/dcousens/ordinal)
  - Date diffing
    - date diffing is not supported by intl
    - date-diff is very small npm utility to for date-diffing
      - [Date Diff](https://github.com/melvinsembrano/date-diff)

  ## Example usage ⚗️
  ----
  - formatDateText()
    - yes, it will work!
    - example output: March 12, 2012
  - formateDateTest(date, 'en-US', {true, {month: 'long'}})
    - example output: Mar 12th, 2012
  - formateDateTest(date, 'en-US', {false, {month: 'short', day: 'numeric'})
    - example output: Mar 12, 2012
  - formateDateTest(date, 'en-GB', {false, {month: 'short', day: 'numeric'})
    - example output: 12 Mar., 2012
*/

function formatDateText(date, locale, props) {
  if (locale === void 0) {
    locale = 'en-US';
  }

  if (props === void 0) {
    props = {
      opts: {},
      showOrdinal: false
    };
  }

  var _props = props,
      showOrdinal = _props.showOrdinal,
      opts = _props.opts;
  var browserSupportsIntl = typeof Intl !== 'undefined';
  console.log(browserSupportsIntl);
  var formattedDate = new Date(date);

  if (browserSupportsIntl && locale === 'en-US' && showOrdinal === true) {
    var monthOptions = opts.month ? {
      month: opts.month
    } : {
      month: 'short'
    };
    var monthFormat = new Intl.DateTimeFormat(locale, monthOptions).format(formattedDate);
    var day = parseInt(new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    }).format(formattedDate));
    var dayOrdinal = ordinal(day);
    return monthFormat + " " + dayOrdinal;
  }

  return browserSupportsIntl ? new Intl.DateTimeFormat(locale, opts).format(formattedDate) : date;
} // export default function() {

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
function formatPriceText(price, locale, opts) {
  if (locale === void 0) {
    locale = 'en-US';
  }

  if (opts === void 0) {
    opts = {};
  }

  var isNotANumber = isNaN(price);
  var isNotSupportingIntl = typeof Intl === 'undefined';
  return isNotSupportingIntl || isNotANumber ? price : new Intl.NumberFormat(locale, opts).format(price);
}

window.formatDateText = formatDateText;
window.formatPriceText = formatPriceText;

exports.formatDateText = formatDateText;
exports.formatPriceText = formatPriceText;
