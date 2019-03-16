import React from 'react';
import styled from 'styled-components';
import Row from 'antd/lib/grid/row';
import { H1 } from 'components/common/typo';
import AddItem from "containers/AddItem";

import 'antd/lib/grid/style/index.css';

const Header = styled.div`
  height: 4em;
  text-align: center;
`;

const Menu = styled.div`
  display: block;
  margin: 8px 0;
  width: 100%;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 0 16px;
`;

type containerProps = {
    children: React.ReactNode
}
const Container = ({ children }: containerProps) => (
    <Wrapper>
        <Menu>
            <AddItem />
        </Menu>
        <Row gutter={16}>
            {children}
        </Row>
    </Wrapper>
);

export default Container;
