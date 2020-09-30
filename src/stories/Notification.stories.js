import React from 'react';

import Notification from '../components/Notification/Notification';

export default {
  title: 'Core/Notification',
  component: Notification,
};

const Template = (args) => <Notification  {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No',
  color: '#1976d2'
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No',
  color: '#dc004e'
};

export const Success = Template.bind({});
Success.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No',
  color: '#4caf50'
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No',
  color: '#ff9800'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  yes: 'Yes',
  no: 'No',
  color: '#f44336'
};

