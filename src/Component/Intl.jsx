import React from 'react';
import { FormattedDate, FormattedTime, FormattedRelative, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

// class App extends Component {
function Main() {
  return (
    <div className="">
      <h2>日期时间</h2>
      <hr />
      <div>&lt;FormattedDate /&gt; 用于格式化日期，能够将一个时间戳格式化成不同语言中的日期格式。</div>
      <FormattedDate
        value={new Date(1459832991883)}
      />
      <br />
      <div>&lt;FormattedTime /&gt; 用于格式化时间</div>
      <FormattedTime
        value={new Date(1459832991883)}
      />
      <br />
      <div>&lt;FormattedRelative /&gt;  通过这个组件可以显示传入组件的某个时间戳和当前时间的关系</div>
      <FormattedRelative
        value={Date.now()}
      />

      <h2>数字量词</h2>
      <hr />
      <div>&lt;FormattedNumber /&gt; 用来给一串数字标逗号</div>
      <FormattedNumber
        value={1000}
      />
      <div>&lt;FormattedPlural  /&gt; 指定复数量词</div>
      <FormattedPlural
        value={1}
        one="message"
        other="messages"
      />
      <h2>字符串的格式化</h2>
      <hr />
      <div>&lt;FormattedMessage  /&gt; 用来给一串数字标逗号</div>
      <FormattedMessage
        id="intl.hello"
        description="say hello to Howard"
        defaultMessage="Hello, Howard!"
      />
    </div>
  );
}

export default Main;
