import React from 'react'
import {MyComponent} from "../lib/my-component";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'Stories',
    component: MyComponent,
} as ComponentMeta<any>;

export const Basic = () => {
    return <MyComponent />
}