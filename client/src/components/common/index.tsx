import React from 'react';
import styled from 'styled-components';
import Empty from 'antd/lib/empty';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';

import 'antd/lib/empty/style/index.css';
import 'antd/lib/icon/style/index.css';
import 'antd/lib/message/style/index.css';

import { H3, Paragraph } from "components/common/typo";

type noDataProps = {
    description: string;
};

export const NoData = ({ description }: noDataProps) => <Empty description={<span>{description}</span>} />;

const ErrorIcon = styled(Icon)`
  && {
    color: red;
    font-size: 3em;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

type errorProps = {
    message: string;
}

export const Error = ({ message }: errorProps) => (
    <Wrapper>
        <ErrorIcon type="exclamation-circle" theme="filled" />
        <H3>Error Occurred!</H3>
        <Paragraph>{message}</Paragraph>
    </Wrapper>
);

export const error = (str: string) => message.error(str);
export const success = (str: string) => message.success(str);
