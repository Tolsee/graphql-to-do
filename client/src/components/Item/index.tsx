import React, { Fragment } from 'react';
import styled from 'styled-components';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';

import 'antd/lib/card/style/index.css';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/popover/style/index.css';

import { H4, Paragraph } from 'components/common/typo/index';

const Title = styled(H4)`
  && {
    margin: 0;
    font-weight: 400;
    letter-spacing: 1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const FullScreenIcon = styled(Icon)``;

const Date = styled(Paragraph)`
  && {
    margin: 0 0 ${({ theme: { spacing }}) => spacing.first} 0;
    color: ${({theme: { textLight }}) => textLight};
  }
`;

const DescText = styled(Paragraph)`
  && {
    text-overflow: ellipsis;
    height: 1.5em;
    white-space: nowrap;
    overflow: hidden; 
    margin: 0;
  }
`;

// TODO: Can we make css more resilient?
// CSS height matches the line height of description
const StyledCard = styled(Card)`
  && {
    border-radius: 5px;
    border-color: transparent;
    box-sizing: border-box;
    margin: 16px 0 0 0;
    cursor: pointer;
    background: ${({ theme: { cardBackground }}) => cardBackground};
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
    .ant-card-body {
      padding: ${({theme: {spacing}}) => spacing.second};
    }
    
    &&:hover {
      //box-shadow: 0 15px 6px -6px #d5d5d5;
      ${FullScreenIcon} {
        display: block;
      }
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
            <Fragment>
                <Title>{title}</Title>
                <Date>29 September 2018</Date>
                <DescText>{ body || '' }</DescText>
            </Fragment>
        </StyledCard>
    );
};

export default Item;

