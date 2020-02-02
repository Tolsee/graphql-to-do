import React from 'react';
import styled from "styled-components";
import Typography from "antd/lib/typography";

import 'antd/lib/typography/style/index.css';
import { BlockProps } from "antd/lib/typography/Base";

const {
    Title: RawTitle,
    Paragraph: RawParagraph
} = Typography;

const Title = styled(RawTitle)`
  && {
    color: ${({theme: {textColor}}) => textColor};
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const Paragraph = styled(RawParagraph)`
  && {
    color: ${({theme: {textColor}}) => textColor};
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

// @ts-ignore
export const H1 = (props: BlockProps) => <Title level={1} {...props} />;
// @ts-ignore
export const H2 = (props: BlockProps) => <Title level={2} {...props} />;
// @ts-ignore
export const H3 = (props: BlockProps) => <Title level={3} {...props} />;
// @ts-ignore
export const H4 = (props: BlockProps) => <Title level={4} {...props} />;

