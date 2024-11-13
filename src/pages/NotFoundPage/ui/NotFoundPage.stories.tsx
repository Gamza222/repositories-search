import React from "react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Meta, StoryObj } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as Meta<typeof NotFoundPage>;

type Template = StoryObj<typeof NotFoundPage>;

export const Primary: Template = {};
Primary.args = {};

export const PrimaryDark: Template = {};
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
