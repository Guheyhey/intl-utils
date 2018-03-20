import ordinal from 'ordinal'

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

export default function formatDateText (
  date,
  locale = 'en-US',
  props = {
    opts: {},
    showOrdinal: false,
  },
) {
  const {
    showOrdinal,
    opts,
  } = props
  const browserSupportsIntl = typeof Intl !== 'undefined'
  console.log(browserSupportsIntl)
  const formattedDate = new Date(date)
  if (
    browserSupportsIntl &&
    locale === 'en-US' &&
    showOrdinal === true
  ) {
    const monthOptions = opts.month ? { month: opts.month } : { month: 'short' }
    const monthFormat = new Intl.DateTimeFormat(locale, monthOptions).format(formattedDate)
    const day = parseInt(new Intl.DateTimeFormat(locale, {day: 'numeric'}).format(formattedDate))
    const dayOrdinal = ordinal(day)
    return `${monthFormat} ${dayOrdinal}`
  }
  return browserSupportsIntl
    ? new Intl.DateTimeFormat(locale, opts).format(formattedDate)
    : date
}

// export default function() {
//   window.formatDateText
// }
