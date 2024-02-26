import { Button, Card, Divider, Input, Form, message } from "antd";
import Logo from "../../assets/logo/logo";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { authValidation } from "../../utils/validators";
import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/services";
import { useState } from "react";

const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (payload) => authServices.signin(payload),
    onError: (error) => {
      messageApi.error(error.response.data.message || "something went wrong");
    },
    onSuccess: ({ status, data }) => {
      if (status === 200) {
        localStorage.setItem("token", data?.token);
        return navigate("/campaigns");
      }

      messageApi.error("oops! somehing went wrong. please try again ");
    },
    onSettled: () => setIsLoading(false),
  });

  return (
    <Form
      layout="vertical"
      requiredMark={false}
      onFinish={(payload) => {
        setIsLoading(true);
        mutate(payload);
      }}
    >
      {contextHolder}
      <Card
        bordered="false"
        style={{
          width: 400,
        }}
      >
        <Link to={"../"}>
          <div className="logo py-4">
            <Logo /> <span>Conva.</span>
          </div>
        </Link>
        <div className="text-center py-4">
          <Divider plain>
            <p className="text-2xl m-0">Sign in</p>
          </Divider>
          <p className="text-gray-500">
            Enter your credentials to access conva
          </p>
        </div>
        <Form.Item
          className="mt-6"
          label="Email address"
          name="email"
          rules={authValidation.email}
        >
          <Input
            placeholder="jane@doe.com"
            size="large"
            variant="filled"
            name="email"
          />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[{ require: true, message: "please enter your password" }]}
        >
          <Input
            placeholder="create a password"
            size="large"
            variant="filled"
          />
        </Form.Item>
        <div className="flex py-4 justify-end">
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary w-full"
            size="large"
          >
            {" "}
            Sign in{" "}
          </Button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            Have an account ? <Link to={"/sign-up"}>Sign up</Link>{" "}
          </span>
        </div>
      </Card>
    </Form>
  );
};

export default SignIn;
