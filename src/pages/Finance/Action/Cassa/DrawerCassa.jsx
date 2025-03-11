import React from "react";
import { Drawer, Form, Input, Button } from "antd";

const DrawerCassa = ({ open, onClose, onAdd }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onAdd({ ...values, createdAt: new Date().toLocaleDateString() });
      form.resetFields();
    });
  };

  return (
    <Drawer title="Yangi Jarima" open={open} onClose={onClose} width={400}>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="fullName" label="To'liq Ismi" rules={[{ required: true, message: "Ismni kiriting!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="amount" label="Miqdori" rules={[{ required: true, message: "Miqdor kiriting!" }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="note" label="Izoh">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Qo'shish</Button>
      </Form>
    </Drawer>
  );
};

export default DrawerCassa;
