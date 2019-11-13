import { configure, addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import myTheme from './myTheme';

addParameters({
  options: {
    theme: myTheme,
  },
});
addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
