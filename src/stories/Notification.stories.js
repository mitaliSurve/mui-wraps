import React from 'react';
import { UiColor } from './theme/index';
import Notification from '../components/Notification/Notification';

export default {
  title: 'Core/Notification',
  component: Notification,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Notification  {...args} />;


export const Primary = Template.bind({});
console.log( "new color: ", UiColor);
Primary.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  PrimaryButton: 'Yes',
  SecondaryButton: 'No',
  color: UiColor.PRIMARY
};

export const Success = Template.bind({});
Success.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  PrimaryButton: 'Yes',
  SecondaryButton: 'No',
  color: UiColor.SUCCESS
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  PrimaryButton: 'Yes',
  SecondaryButton: 'No',
  color: UiColor.WARNING
};

export const Info = Template.bind({});
Info.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  PrimaryButton: 'Yes',
  SecondaryButton: 'No',
  color: UiColor.INFO
};

export const Error = Template.bind({});
Error.args = {
  title: 'Nature Around Us',
  description: 'We are going to learn different kinds of species in nature that live together.We are going to learn different kinds of species in nature that live together to form amazing environment.',
  PrimaryButton: 'Yes',
  SecondaryButton: 'No',
  color: UiColor.ERROR
};

