import React from 'react';
import styled from 'styled-components';
import Col from 'antd/lib/grid/col';
import { H3 } from 'components/common/typo';
import Item, { ItemProps } from 'components/Item';

import AddItem from 'containers/AddItem';

import { NoData, Error } from 'components/common';

const StyledHeading = styled(H3)`
  && {
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.1em;
  }
`;

const Header = styled.div`
  padding-top: ${({ theme: { spacing }}) => spacing.first };
  display: flex;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  padding-bottom: 16px;
`;

const Wrapper = styled.div`
  background-color: ${({theme: { boardBackground }}) => boardBackground};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 5px;
  padding: 0 16px;
`;

const titlize = (str: string) => str[0].toUpperCase() + str.substr(1);

const emptyItems = [
    {
        loading: true,
        _id: 'empty',
        title: 'empty',
        body: 'empty'
    }
];

type BoardParams = {
    _id: string,
    name: string;
    loading: boolean;
    error: any;
    updateItem: Function;
    items: Array<ItemProps>;
}

const Board = (props: BoardParams) => {
    const { _id: board, name, error, loading, items } = props;

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const onDrop = (event: React.DragEvent) => {
        // on drop event handler
        const _id = event.dataTransfer.getData('text');
        props.updateItem({ variables: { id: _id, input: { board }} })
    };


    return (
        <Col
            span={6}
            {...!loading && {
                onDragOver: onDragOver,
                onDrop: onDrop
            }}
        >
            <Wrapper>
                <Header>
                    <StyledHeading>{ titlize(name) }</StyledHeading>
                    <AddItem board={board} />
                </Header>
                <ItemWrapper>
                    {
                        error && <Error message="Can not fetch data" />
                    }
                    {
                        !error && (loading ?
                                emptyItems.map(prop => <Item key={prop._id} {...prop} />) :
                                items && (
                                    items.length ? items.map(({ _id, title, body }) => (
                                        <Item key={_id} _id={_id} loading={false} title={title} body={body} />
                                    )) :
                                    <NoData description="No items" />
                                )
                        )
                    }
                </ItemWrapper>
            </Wrapper>
        </Col>
    );
};

export default Board;
