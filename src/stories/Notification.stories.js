import React from 'react';

import Notification from '../components/Notification/Notification';

export default {
  title: 'Core/Notification',
  component: Notification,
};

const Template = (args) => <Notification  {...args} />;


export const Basic = Template.bind({});
Basic.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No'
};
