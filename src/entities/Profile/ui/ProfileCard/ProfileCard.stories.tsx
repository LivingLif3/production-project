import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Country } from '../../../Country'
import { Currency } from '../../../Currency'
// @ts-ignore
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "admin",
        age: 22,
        country: Country.Belarus,
        lastname: 'Letko',
        first: 'Sasha',
        city: 'asf',
        currency: Currency.BYN,
        avatar
    }
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'dsadasd'
};

export const Disabled = Template.bind({});
Disabled.args = {
    isLoading: true
};

