import React from 'react';
// import  { Drawer, Button }  from 'antd';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import DrawerComponent from './Drawer'
storiesOf('Drawer', module)
.addDecorator(withKnobs)
  .add('basic', () => 
  <DrawerComponent placement = {select('placement', { left:'left', right: 'right', bottom: 'bottom', top: 'top'}, 'left')}/>)
  .add('info', () => 
  <DrawerComponent placement = {select('placement', { left:'left', right: 'right', bottom: 'bottom', top: 'top'}, 'left')}/>)
 