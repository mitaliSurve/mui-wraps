import React from 'react';

import Notification from '../components/Notification/Notification';

export default {
  title: 'Core/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Basic = Template.bind({});
