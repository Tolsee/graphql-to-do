import React from 'react';

import { storiesOf } from '@storybook/react';

// Todo
// Get rid of this unused module import
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Todo
// Change to relative import
import { H1, H2, H3, H4 } from 'components/common/bypo';

import Todo from 'components/Item';

import Board from 'components/Board';

storiesOf('Typography', module)
  .add('H1', () => <H1>Header 1</H1>)
  .add('H2', () => <H2>Header 1</H2>)
  .add('H3', () => <H3>Header 1</H3>)
  .add('H4', () => <H4>Header 1</H4>);


storiesOf('Todos', module)
  .add('Loading Todo component', () => <Todo loading={true} title="Loading Todo Title" description="Loading Todo Description" />)
  .add('Todo component', () => <Todo loading={false} title="Todo Title" description="Todo Description" />);

const items = [
  { _id: 'asdasd', title: 'First Title', body: 'asjdhajkhsd' }
];

storiesOf('Board', module)
  .add('Todo Board', () => <Board name={'TODO'} items={items} />);
