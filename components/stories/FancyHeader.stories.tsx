import { ReactNode } from "react";
import FancyHeader, { Props } from "../FancyHeader";
import { Story } from "@storybook/react";

const Template: Story<Props & { children: ReactNode }> = (props: any) => (
  <FancyHeader {...props} />
);

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  heading: "Header",
  children: "Children",
  height: "10rem",
};

export const FullPageHeaderStory = Template.bind({});
FullPageHeaderStory.args = {
  heading: "Full Page Header",
  children: "Children",
  height: "90vh",
};

export const EmptyHeaderStory = Template.bind({});
EmptyHeaderStory.args = {
  heading: undefined,
  children: undefined,
};

export default {
  title: "Fancy Header",
  component: FancyHeader,
  argTypes: {},
};
