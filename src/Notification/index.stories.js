import React from 'react';
import  { notification, Button }  from 'antd';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

storiesOf('Notification', module)
.addDecorator(withKnobs)
  .add('basic', () => 
  <Button type="primary" 
    onClick={ 
        () => 
        notification[select("type",{success: 'success', error: 'error', warn: 'warn' }, 'success')]({
        message: text('message','Notification Title'),
        placement:select('placement', { topLeft:'topLeft', topRight : 'topRight', bottomRight: 'bottomRight', bottomLeft : 'bottomLeft'}, 'bottomLeft'),
        description: text('description','This is the content of the notification. This is the content of the notification. This is the content of the notification.')
    })
}
>
      Open the notification box
    </Button>
  )
 
