import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonSize, ButtonTheme } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

type Template = StoryObj<typeof Button>;

export const Primary: Template = {};
Primary.args = {
  children: "Text",
};

export const Clear: Template = {};
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

export const Usual: Template = {};
Usual.args = {
  children: "Text",
  theme: ButtonTheme.USUAL,
};
