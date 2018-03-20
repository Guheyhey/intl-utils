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
const formatTextDateScenerio = [
  {
    date: 'March 12, 2012',
    locale: 'en-US',
    name: 'test US no defaults',
    props: {
      opts: {},
      showOrdinal: false,
    },
    expected: '3/12/2012',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US w/ ordinal',
    props: {
      opts: {
        month: 'short',
        day: 'numeric',
      },
      showOrdinal: true,
    },
    expected: 'Mar 20th',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US regular',
    props: {
      opts: {
        month: 'short',
        day: 'numeric',
      },
      showOrdinal: false,
    },
    expected: 'Mar 20',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US regular',
    props: {
      opts: {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      },
      showOrdinal: false,
    },
    expected: 'March 20, 2017',
  },
  {
    date: 'March 20, 2017',
    locale: 'en-US',
    name: 'test US regular',
    props: {
      opts: {
        month: 'long',
        day: 'numeric',
        year: '2-digit',
      },
      showOrdinal: false,
    },
    expected: 'March 20, 17',
  },
  {
    date:'Apr 1, 2018',
    locale: 'zh-CN',
    name: 'test CN no defaults',
    props: {
      opts: {},
      showOrdinal: false,
    },
    expected: '2018/4/1',
  },
  {
    date:'Apr 1, 2018',
    locale: 'de-DE',
    name: 'test DE no defaults',
    props: {
      opts: {},
      showOrdinal: false,
    },
    expected: '1.4.2018',
  },
  {
    date:'Apr 1, 2018',
    locale: 'es-ES',
    name: 'test ES no defaults',
    props: {
      opts: {},
      showOrdinal: false,
    },
    expected: '1/4/2018',
  },
  {
    date:'Apr 1, 2018',
    locale: 'fr-FR',
    name: 'test FR no defaults',
    props: {
      opts: {},
      showOrdinal: false,
    },
    expected: '01/04/2018',
  },
]

formatTextDateScenerio.forEach(function testScenario (scenario) {
  QUnit.test(`test ${scenario.name}`, (assert) => {
    const result = formatDateText(scenario.date, scenario.locale, { opts: scenario.props.opts, showOrdinal: scenario.props.showOrdinal })
    assert.ok(result === scenario.expected, 'passed')
  })
})