import React from "react";
import { Typography, Form, Input, Button } from "antd";

const { Title, Paragraph } = Typography;

const ContactUsPage = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="container p-8 mx-auto">
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        Have a question or feedback? Feel free to get in touch with us using the
        form below.
      </Paragraph>
      <Form
        name="contact-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please input a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUsPage;
