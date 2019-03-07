import React from 'react';

import { storiesOf } from '@storybook/react';

// Todo
// Get rid of this unused module import
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Todo
// Change to relative import
import { H1, H2, H3, H4 } from '../components/common/typo';

storiesOf('Typography', module)
  .add('H1', () => <H1>Header 1</H1>)
  .add('H2', () => <H2>Header 1</H2>)
  .add('H3', () => <H3>Header 1</H3>)
  .add('H4', () => <H4>Header 1</H4>)
