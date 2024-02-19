import { Button, Card, Divider, Input, Form } from "antd";
import Logo from "../../assets/logo/logo";
import "./auth.css";
import { Link } from "react-router-dom";
import { authValidation } from "../../utils/validators";
import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/services";

const SignUp = () => {
  const { mutate } = useMutation({
    mutationFn: (payload) => authServices.signup(payload),
    onError: (error) => {
      console.error(error.response.data.errors);
    },
    onSuccess: ({ status, data }) => {
      console.log(status, data);
    },
  });

  return (
    <Form layout="vertical" onFinish={(payload) => mutate(payload)}>
      <Card
        bordered="false"
        style={{
          width: 400,
        }}
      >
        <div className="logo py-4">
          <Logo /> <span>Conva.</span>
        </div>
        <div className="text-center py-4">
          <Divider plain>
            <p className="text-2xl m-0">Sign up</p>
          </Divider>
          <p className="text-gray-500">Create a new conva account, it's free</p>
        </div>
        <Form.Item
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
          <Button htmlType="submit" type="primary w-full" size="large">
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
