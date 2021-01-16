import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';
import React from 'react';
import Text, { Props } from '../../../components/utils/Text';
import withChildrenMock from '../../shared/hocs/withChildrenMock';

type PropsWithChildrenMock = Props & {
  text?: string;
};

export default {
  title: 'Next Right Now/Data display/Text',
  component: Text,
  argTypes: withChildrenMock({}),
} as Meta;

const Template: Story<PropsWithChildrenMock> = (props) => {
  const { text } = props;

  return (
    <Text
      {...props}
    >
      {text || 'Default text'}
    </Text>
  );
};

export const DynamicExample: Story<PropsWithChildrenMock> = Template.bind({});
DynamicExample.args = {
  text: `
<p>Some text</p>

That can be displayed on multiple lines,
quite easily,
without having to use HTML "&lt;br /&gt;" to break lines.

Useful sometimes, for documentation purpose.
`,
};
