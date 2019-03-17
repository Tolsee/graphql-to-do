import React from 'react';
import styled from 'styled-components';
import Col from 'antd/lib/grid/col';
import { H3 } from 'components/common/typo';
import Item, { ItemProps } from 'components/item';
import { NoData, Error } from 'components/common';

const StyledHeading = styled(H3)`
  && {
    margin: 0;
  }
`;

const Header = styled.div`
  padding: 5px 0 0 5px;
  text-align: left; 
`;

const ItemWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  padding-bottom: 16px;
`;

const Wrapper = styled.div`
  background-color: #eee;
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
    error: any;
    loading: boolean;
    name: string;
    updateItem: Function;
    items: Array<ItemProps>;
}

const Board = (props: BoardParams) => {
    const { error, loading, items, name } = props;

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    const onDrop = (event: React.DragEvent) => {
        // on drop event handler
        const _id = event.dataTransfer.getData('text');
        props.updateItem({ variables: { id: _id, input: { state: name }} })
    };


    return (
        <Col
            span={8}
            {...!loading && {
                onDragOver: onDragOver,
                onDrop: onDrop
            }}
        >
            <Wrapper>
                <Header>
                    <StyledHeading>{ titlize(name) }</StyledHeading>
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
