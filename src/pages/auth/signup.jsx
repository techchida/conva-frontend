import { Button, Card, Divider, Input, Form, message } from "antd";
import Logo from "../../assets/logo/logo";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { authValidation } from "../../utils/validators";
import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/services";
import { useState } from "react";

const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (payload) => authServices.signup(payload),
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
            <p className="text-2xl m-0">Sign up</p>
          </Divider>
          <p className="text-gray-500">Create a new conva account, it's free</p>
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
          rules={authValidation.password}
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
            Sign up{" "}
          </Button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            Have an account ? <Link to={"../sign-in"}>Sign in</Link>{" "}
          </span>
        </div>
      </Card>
    </Form>
  );
};

export default SignUp;
