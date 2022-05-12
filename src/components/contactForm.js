import React, { useState } from "react";
import { Form, Input, Button } from "antd";
// import NumericInput from '../Inputnum';


// import "./signup-form.scss";

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const SignupForm = props => {
    const [confirmDirty, setConfirmDirty] = useState(false);
    const [value, setValue] = useState();
    const { getFieldDecorator, getFieldsError } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                // props.setData(data);
                // props.signup(data);
                // props.signupExpert(data)
                // props.setNextstep(props.nextstep + 1);
                // props.refsigntupexpert.current.next();
                // props.handle();

            }
        });

    };

    const validateToNextPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && confirmDirty) {
            form.validateFields(['password_confirmation'], { force: true });
        }
        callback();
    };

    const compareToFirstPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setConfirmDirty(confirmDirty || !!value);
    };

    const onChange = value => {
        setValue(value);
    };

    return (
        <Form name="sentMessage" onSubmit={handleSubmit}>
            {/* <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2"> */}
            <Form.Item>
                {getFieldDecorator("name", {
                    rules: [{ required: true, message: "Please input your name!" }]
                })(
                    <Input
                        placeholder="Name"
                    />
                )}
                <p className="help-block text-danger" />
            </Form.Item>
            {/* </div>
            </div > */}

            <Form.Item>
                <Button disabled={hasErrors(getFieldsError())} type="primary" htmlType="submit" className="submit-button">
                    skander
                </Button>
            </Form.Item>
        </Form>
    );
};

const ContactForm = Form.create({ name: "normal_login" })(SignupForm);

export default ContactForm;
