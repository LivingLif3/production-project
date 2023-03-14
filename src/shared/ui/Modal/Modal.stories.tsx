import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../../app/providers/ThemeProviders'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda beatae dolorem molestiae nemo. Quae quam quas quod soluta unde.'
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda beatae dolorem molestiae nemo. Quae quam quas quod soluta unde.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
