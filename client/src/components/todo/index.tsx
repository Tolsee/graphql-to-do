import React from 'react';
import Card from 'antd/lib/card';

import 'antd/lib/card/style/index.css';

const { Meta } = Card;

declare type TodoProps = {
    loading: boolean;
    title: string;
    description: string;
}

const Todo = ({ loading, title, description }: TodoProps) => (
    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
            title={title}
            description={description}
        />
    </Card>
);

export default Todo;

