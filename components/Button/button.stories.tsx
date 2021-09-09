import React from 'react';
import { Button, buttonType, colorType } from './button';

export default {
  component: Button,
  title: 'Transcend/UI Elements/Button',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          ...Object.keys(colorType)
            .map((key) => colorType[key])
            .filter((k) => !(parseInt(k) >= 0)),
        ],
      },
    },
    typeHTML: {
      control: {
        type: 'select',
        options: [
          //get values from buttonType enum
          ...Object.keys(buttonType)
            .map((key) => buttonType[key])
            .filter((k) => !(parseInt(k) >= 0)),
        ],
      },
    },
    // backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: 'blue' };
export const Secondary = Template.bind({});
Secondary.args = { color: 'gray' };
export const Success = Template.bind({});
Success.args = { color: 'green' };
export const Danger = Template.bind({});
Danger.args = { color: 'red' };
export const Warning = Template.bind({});
Warning.args = { color: 'yellow' };
export const Light = Template.bind({});
Light.args = { color: 'light' };
export const Dark = Template.bind({});
Dark.args = { color: 'dark' };
