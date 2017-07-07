import React from 'react';
import { FormattedDate, FormattedTime, FormattedRelative, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

// class App extends Component {
function Main() {
  return React.createElement(
    'div',
    { className: '' },
    React.createElement(
      'h2',
      null,
      '\u65E5\u671F\u65F6\u95F4'
    ),
    React.createElement('hr', null),
    React.createElement(
      'div',
      null,
      '<FormattedDate /> \u7528\u4E8E\u683C\u5F0F\u5316\u65E5\u671F\uFF0C\u80FD\u591F\u5C06\u4E00\u4E2A\u65F6\u95F4\u6233\u683C\u5F0F\u5316\u6210\u4E0D\u540C\u8BED\u8A00\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\u3002'
    ),
    React.createElement(FormattedDate, {
      value: new Date(1459832991883)
    }),
    React.createElement('br', null),
    React.createElement(
      'div',
      null,
      '<FormattedTime /> \u7528\u4E8E\u683C\u5F0F\u5316\u65F6\u95F4'
    ),
    React.createElement(FormattedTime, {
      value: new Date(1459832991883)
    }),
    React.createElement('br', null),
    React.createElement(
      'div',
      null,
      '<FormattedRelative />  \u901A\u8FC7\u8FD9\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u663E\u793A\u4F20\u5165\u7EC4\u4EF6\u7684\u67D0\u4E2A\u65F6\u95F4\u6233\u548C\u5F53\u524D\u65F6\u95F4\u7684\u5173\u7CFB'
    ),
    React.createElement(FormattedRelative, {
      value: Date.now()
    }),
    React.createElement(
      'h2',
      null,
      '\u6570\u5B57\u91CF\u8BCD'
    ),
    React.createElement('hr', null),
    React.createElement(
      'div',
      null,
      '<FormattedNumber /> \u7528\u6765\u7ED9\u4E00\u4E32\u6570\u5B57\u6807\u9017\u53F7'
    ),
    React.createElement(FormattedNumber, {
      value: 1000
    }),
    React.createElement(
      'div',
      null,
      '<FormattedPlural  /> \u6307\u5B9A\u590D\u6570\u91CF\u8BCD'
    ),
    React.createElement(FormattedPlural, {
      value: 1,
      one: 'message',
      other: 'messages'
    }),
    React.createElement(
      'h2',
      null,
      '\u5B57\u7B26\u4E32\u7684\u683C\u5F0F\u5316'
    ),
    React.createElement('hr', null),
    React.createElement(
      'div',
      null,
      '<FormattedMessage  /> \u7528\u6765\u7ED9\u4E00\u4E32\u6570\u5B57\u6807\u9017\u53F7'
    ),
    React.createElement(FormattedMessage, {
      id: 'intl.hello',
      description: 'say hello to Howard',
      defaultMessage: 'Hello, Howard!'
    })
  );
}

export default Main;
//# sourceMappingURL=E:\study\react-starter-kit\src\Component\Intl.js.map