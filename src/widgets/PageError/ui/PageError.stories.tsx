import React from "react";
// import { , type ComponentMeta, Meta } from '@storybook/react'
import PageError from "./PageError";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Meta, StoryObj } from "@storybook/react/*";

export default {
  title: "widgets/PageError",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof PageError>;

type Template = StoryObj<typeof PageError>;

export const Light: Template = {};
Light.args = {};

export const Dark: Template = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
