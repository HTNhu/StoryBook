import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Alert } from 'antd'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Alert', module)
// .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('success',
    () => <Alert
      message={text("message", "This is success message")}
      type="success"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />)
  .add('error',
    () => <Alert
      message={text("message", "This is error message")}
      type="error"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />)
  .add('info',
    () => <Alert
      message={text("message", "This is info message")}
      type="info"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />)
  .add('warning',
    () => <Alert
      message={text("message", "This is warning message")}
      type="warning"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />);