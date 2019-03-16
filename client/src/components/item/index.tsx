import React from 'react';
import styled from 'styled-components';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/index.css';

import { H4 } from 'components/common/typo/index';

const { Meta } = Card;

const Title = styled(H4)`
  && {
    margin-top: 0;
  }
`;

const StyledCard = styled(Card)`
  && {
    border-radius: 5px;
    border-color: transparent;
    width: 100%;
    box-sizing: border-box;
    margin: 16px 0 0 0;
    
    &&:hover {
      box-shadow: 0 15px 6px -6px #d5d5d5;
    }
  }
`;

export type ItemProps = {
    loading: boolean;
    _id?: string;
    title?: string;
    body?: string;
}

const Item = ({ loading, _id, title, body }: ItemProps) => {
    const onDrag = (event: React.DragEvent) => {
        event.dataTransfer.setData('text/plain', _id || '');
    };

    return (
        <StyledCard
            draggable
            onDragStart={onDrag}
            loading={loading}
        >
            <Meta
                title={<Title>{title}</Title>}
                description={body}
            />
        </StyledCard>
    );
};

export default Item;

