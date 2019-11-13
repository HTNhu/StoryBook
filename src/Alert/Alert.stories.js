import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert } from 'antd'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('success',
    () => <Alert
      message={text("successMessage", "This is success message")}
      type="success"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />)
  .add('error',
    () => <Alert
      message={text("successMessage", "This is error message")}
      type="error"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />)
  .add('warning',
    () => <Alert
      message={text("successMessage", "This is warning message")}
      type="warning"
      showIcon={boolean("showIcon", true)}
      closable={boolean("closeable", true)} />);