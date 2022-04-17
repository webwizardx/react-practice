import ClosableBadge from './ClosableBadge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'ClosableBadge',
    component: ClosableBadge
} as ComponentMeta<typeof ClosableBadge>;

const Template: ComponentStory<typeof ClosableBadge> = (args: any) => (
    <ClosableBadge {...args} />
);

export const NormalFilter = Template.bind({});

NormalFilter.args = {
    children: 'Javascript'
};
