import React from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification, Select } from "antd";
import { actCheckout } from "../../../action";
import { actPaymentDeleteCart } from "../../../action";
import { Link } from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const openSuccess = () => {
  notification.success({
    message: "Thông Báo :",
    description: "Mua hàng thành công !",
  });
};

const FormCheckout = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.carts);

  const onFinish = (values) => {
    const action = actCheckout(values, cart);
    dispatch(action);
    openSuccess();
    deleteCart();
    history.push("/");
  };

  const deleteCart = () => {
    const action = actPaymentDeleteCart([]);
    dispatch(action);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="form-checkout">
      <Form {...formItemLayout} form={form} name="checkout" onFinish={onFinish}>
        <Form.Item
          name="fullname"
          label="Fullname"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          max={9}
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            maxLength={10}
            minLength={9}
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Are you sure buy this product?</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            CHECK OUT
          </Button>
          <Link to="/product">
            <Button type="primary" htmlType="submit">
              RETURN TO SHOP
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormCheckout;
