import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'antd/lib/modal';
import Form, { FormComponentProps } from 'antd/lib/form';
import Button from 'antd/lib/button';

import Input from 'antd/lib/input';
import 'antd/lib/modal/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/input/style/index.css';

const { TextArea } = Input;

interface AddItemFormProps extends FormComponentProps {
    onFieldChange: Function;
    validate: Function;
}

const AddForm = (props: AddItemFormProps) => {
    const { form: { getFieldDecorator, validateFields }, onFieldChange } = props;
    props.validate(validateFields);

    const formItemLayout = {
        wrapperCol: {
            xs: { span: 24 }
        },
    };

    return (
        <Form {...formItemLayout}>
            <Form.Item>
                {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter Title!' }],
                })(
                    <Input
                        type="text"
                        placeholder="Title"
                        onChange={onFieldChange('title')}
                    />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('body', {})(
                    <TextArea
                        rows={4}
                        placeholder="Description.."
                        onChange={onFieldChange('body')}
                    />
                )}
            </Form.Item>
        </Form>
    );
};

const AddItemForm = Form.create({ name: 'add-item' })(AddForm);

const AddItemButton = styled(Button)`
  && {
    height: 24px;
    width: 24px;
    border-color: ${({theme: { colors }}) => colors.grey_6};
    &&:hover {
      i {
        color: ${({theme: { colors }}) => colors.primary};
      }
    }
    i {
      color: ${({theme: { colors }}) => colors.grey_6};
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      svg {
        height: 12px;
        width: 12px;
      } 
    }
  }
`;

type AddItemProps = {
    handleSubmit: Function;
};

const AddItem = (props: AddItemProps) => {
    /**
     * States at the top
     */
    const [ visible, setVisible ] = useState(false);
    const [ fields, changeFields ] = useState({
        title: '',
        body: ''
    });

    /**
     * Validation can be done in the children
     * So, we can get the function to validate using closure
     */
    let validate: Function;
    const validateFields = (fun: Function) => {
        validate = fun;
    };

    /**
     * Model Controls
     */
    const showModal = () => setVisible(true);
    const hideModel = () => setVisible(false);
    const handleOk = (e: React.SyntheticEvent) => {
        e.preventDefault();
        validate((err: Error | undefined) => {
            if (!err) {
                props.handleSubmit(fields);
                hideModel();
            }
        });
    };
    const handleCancel = () => {
        hideModel();
    };

    /**
     * Form controls
     */
    const onFieldChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        changeFields({
            ...fields,
            [name]: e.target.value
        })
    };

    return (
        <div>
            <AddItemButton ghost shape="circle" icon="plus" onClick={showModal} />
            <Modal
                centered={true}
                title="Add Item"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
               <AddItemForm onFieldChange={onFieldChange} validate={validateFields}/>
            </Modal>
        </div>
    );
};

export default AddItem;
