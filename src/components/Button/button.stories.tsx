// Button.stories.js | Button.stories.ts | Button.stories.jsx | Button.stories.tsx

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';
import '../../../src/styles/index.scss';

const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
);

const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);
const buttonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="https://www.google.com">
      link button
    </Button>
  </>
);

storiesOf('Button Component', module)
  .add('Default Button', defaultButton)
  .add('Button with different size', buttonWithSize)
  .add('Button with different type', buttonWithType);
