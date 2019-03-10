import React from 'react';
import styled from 'styled-components';
import Col from 'antd/lib/grid/col';
import { H3 } from 'components/common/typo';
import Item, { ItemProps } from 'components/item';

const StyledHeading = styled(H3)`
  && {
    margin: 0;
  }
`;

const Header = styled.div`
  padding: 5px 0;
  text-align: center; 
`;

const ItemWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  padding-bottom: 16px;
`;

const Wrapper = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 0 16px;
`;

const titlize = (str: string) => str[0].toUpperCase() + str.substr(1);

type BoardParams = {
    name: string;
    updateItem: Function;
    items: Array<ItemProps>;
}

const Board = (props: BoardParams) => {
    const { items, name } = props;

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
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <Wrapper>
                <Header>
                    <StyledHeading>{ titlize(name) }</StyledHeading>
                </Header>
                <ItemWrapper>
                    {
                        // @ts-ignore
                        items.map(({ _id, title, body }) => (
                            <Item key={_id} _id={_id} loading={false} title={title} description={body} />
                        ))
                    }
                </ItemWrapper>
            </Wrapper>
        </Col>
    );
};

export default Board;
