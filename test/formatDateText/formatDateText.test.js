const formatDateText = require('../../dist/formatDateText')

const formatDateTextScenario = [
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
  {
    date: 'Apr 1, 2018',
    locale: 'zh-CN',
    name: 'test CN no defaults',
    opts: {},
    expected: '2018/4/1',
  },
  {
    date: 'Apr 1, 2018',
    locale: 'de-DE',
    name: 'test DE no defaults',
    opts: {},
    expected: '1.4.2018',
  },
  {
    date: 'Apr 1, 2018',
    locale: 'es-ES',
    name: 'test ES no defaults',
    opts: {},
    expected: '1/4/2018',
  },
  {
    date: 'Apr 1, 2018',
    locale: 'fr-FR',
    name: 'test FR no defaults',
    opts: {},
    expected: '01/04/2018',
  },
]

formatDateTextScenario.forEach(function(scenario) {
  test(scenario.name, function() {
    expect(formatDateText(scenario.date, scenario.locale, scenario.opts)).toBe(scenario.expected)
  })
})