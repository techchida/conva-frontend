import { Button, Card, Divider, Input } from "antd";
import Logo from "../../assets/logo/logo";
import "./auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
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
            <p className="text-2xl m-0">Sign in</p>
          </Divider>
          <p className="text-gray-500">
            Enter your credentials to access conva
          </p>
        </div>
        <div className="input-area">
          <label>Email address</label>
          <Input placeholder="jane@doe.com" size="large" variant="filled" />
        </div>
        <div className="input-area">
          <label>Password</label>
          <Input placeholder="password" size="large" variant="filled" />
        </div>
        <div className="flex py-4 justify-end">
          <Button type="primary w-full rounded-full" size="large">
            {" "}
            Sign in{" "}
          </Button>
        </div>

        <div className="text-center py-4">
          <span className="text-gray-500">
            Don't have an account ? <Link to={"../sign-up"}>Sign up</Link>{" "}
          </span>
        </div>
      </Card>
    </>
  );
};

export default SignIn;
