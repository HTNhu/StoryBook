import { configure, addDecorator } from '@storybook/react';
import React from 'react';
addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
