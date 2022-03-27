import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {MyComponent} from "../lib/my-component";

export default {
    title: 'Hidden Stories',
    component: MyComponent,
} as ComponentMeta<any>;

/**
 * Stories you only want to see in mdx files
 */
export const Default = () => {
    return <MyComponent />
}