import { configure, addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import myTheme from './myTheme';
import { withInfo } from '@storybook/addon-info';

addParameters({
  options: {
    theme: myTheme,
  },
});
addDecorator(storyFn => <div style={{ textAlign: 'center', marginTop:'100px' }}>{storyFn()}</div>)
addDecorator(
  withInfo({
    inline: true, 
    source: true,
    header: false,
    propTables: false,
    components: 3
  })
);
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
