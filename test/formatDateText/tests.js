/*
  TESTING NOTE
  ====
  INTL is not supported in Node < v9.8
  As a result, tests are 'interesting'
  - Read more
    - [Codepen](https://codepen.io/yowainwright/pen/86ea8b1c9a88e3f3ff3cad9e02aa3de2/)
    - [Intl](https://nodejs.org/api/intl.html)
  - The interface is tested, not the locale
*/
const formatDateTextScenerio = [
  {
    date: 'March 12, 2012',
    locale: 'en-US',
    name: 'test US no defaults',
    opts: {},
    expected: '3/12/2012',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US w/ ordinal',
    opts: {
      month: 'short',
      day: 'numeric',
    },
    expected: 'Mar 20',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US regular',
    opts: {
      month: 'short',
      day: 'numeric',
    },
    expected: 'Mar 20',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US regular',
    opts: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
    expected: 'March 20, 2017',
  },
  // {
  //   date: 'March 20, 2017',
  //   locale: 'en-US',
  //   name: 'test US regular',
  //   opts: {
  //     month: 'long',
  //     day: 'numeric',
  //     year: '2-digit',
  //   },
  //   expected: 'March 20, 17',
  // },
  // {
  //   date: 'Apr 1, 2018',
  //   locale: 'zh-CN',
  //   name: 'test CN no defaults',
  //   opts: {},
  //   expected: '2018/4/1',
  // },
  // {
  //   date: 'Apr 1, 2018',
  //   locale: 'de-DE',
  //   name: 'test DE no defaults',
  //   opts: {},
  //   expected: '1.4.2018',
  // },
  // {
  //   date: 'Apr 1, 2018',
  //   locale: 'es-ES',
  //   name: 'test ES no defaults',
  //   opts: {},
  //   expected: '1/4/2018',
  // },
  // {
  //   date: 'Apr 1, 2018',
  //   locale: 'fr-FR',
  //   name: 'test FR no defaults',
  //   opts: {},
  //   expected: '01/04/2018',
  // },
]

formatDateTextScenerio.forEach(function testScenario (scenario) {
  QUnit.test(scenario.name, function (assert) {
    const result = formatDateText(scenario.date, scenario.locale, scenario.opts)
    assert.equal(result, scenario.expected, "result: " + result + ", expect: " + scenario.expected)
  })
})

// formatDateTextScenerio.forEach(function testScenario (scenario) {
//   QUnit.test(`test ${scenario.name}`, (assert) => {
//     const result = formatDateText(scenario.date, scenario.locale, { opts: scenario.props.opts, showOrdinal: scenario.props.showOrdinal })
//     assert.equal(result, scenario.expected, `result: ${result}, expect: ${scenario.expected}`)
//   })
// })
