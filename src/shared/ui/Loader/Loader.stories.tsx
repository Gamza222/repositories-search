import React from "react";
import Loader from "./Loader";

import { StoryObj, Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as Meta<typeof Loader>;

type Template = StoryObj<typeof Loader>;

export const Primary: Template = {};
Primary.args = {};

export const PrimaryDark: Template = {};
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
