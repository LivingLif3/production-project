import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProviders'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description'
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description',
    theme: TextTheme.ERROR
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description'
};
onlyText.decorators = [ThemeDecorator(Theme.DARK)]
