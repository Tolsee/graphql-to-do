import React, { useContext } from 'react';
import styled from 'styled-components';
import Row from 'antd/lib/grid/row';
import Button from 'antd/lib/button';
import Switch from 'antd/lib/switch';

import 'antd/lib/grid/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/switch/style/index.css';

import { AppContext } from 'store/App';

const ThemeSwitch = styled(Switch)`
  && {
    margin-left: ${({ theme: { spacing } }) => spacing.first};
    background-color: ${({ theme: { boardBackground } }) => boardBackground};
  } 
  &&.ant-switch-checked {
    background-color: ${({ theme: { cardBackground } }) => cardBackground};
  }
`;

const Theme = styled.div`
  color: ${({ theme: {textColor} }) => textColor};
`;

const Menu = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.third};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme: { spacing }}) => spacing.fourth};
  background: ${({ theme: { background }}) => background};
`;

type containerProps = {
    children: React.ReactNode
}

const Container = ({ children }: containerProps) => {
    const { mode, toggleMode } = useContext(AppContext);

    return (
        <Wrapper>
            <Menu>
                <Button type="dashed" icon="plus">Add Board</Button>
                <Theme>
                    {mode === 'night' ? 'Light' : 'Dark'}
                    <ThemeSwitch checked={mode === 'night'} onChange={toggleMode}/>
                </Theme>
            </Menu>
            <Row gutter={16}>
                {children}
            </Row>
        </Wrapper>
    );
}

export default Container;
