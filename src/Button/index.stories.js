import React from 'react';
import  { Button }  from 'antd';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
.addDecorator(withKnobs)
  .add('basic', () => <Button loading={boolean('Loading', true)} onClick={action('clicked')} type=
  {select ("Type",{primary: "primary", danger: "danger", dashed: "dashed"}, "default" )} >Hello Button
  </Button>)
  .add('withEmoji', () =>   <Button type="primary" icon="like"></Button>)