import React from 'react';
import { BlockProps } from "antd/lib/typography/Base";
import { Typography } from "antd";

const { Title } = Typography;

export const H1 = (props: BlockProps) => <Title level={1} {...props} />;
export const H2 = (props: BlockProps) => <Title level={2} {...props} />;
export const H3 = (props: BlockProps) => <Title level={3} {...props} />;
export const H4 = (props: BlockProps) => <Title level={4} {...props} />;
