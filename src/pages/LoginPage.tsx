import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { useContext, useState } from "react";
import { GENERATE_OTP } from "../graphql/mutations/generateOTP";
import { LOGIN_WITH } from "../graphql/mutations/loginWith";
import styles from "./Login.module.css";
import { get } from "lodash";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"

export default function LoginPage() {
  const authContext = useContext(AuthContext);
  const [generateOTP] = useMutation(GENERATE_OTP);
  const [loginWith] = useMutation(LOGIN_WITH);
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm<{ mobileNumber: string; otp: string }>();
  const [step, setStep] = useState<"GENERATE_OTP" | "ENTER_OTP">(
    "GENERATE_OTP"
  );
  async function onFormSubmit(values: any) {
    if (step === "GENERATE_OTP") {
      if (form.getFieldsValue()?.mobileNumber) {
        await generateOTP({
          variables: {
            params: {
              mobileNumber: form.getFieldsValue().mobileNumber,
            },
          },
        });
        setStep("ENTER_OTP");
      }
    } else {
      if (form.getFieldsValue()?.otp) {
        const loginRes = await loginWith({
          variables: {
            authData: {
              phoneAuth: {
                id: form.getFieldsValue().mobileNumber,
                otp: form.getFieldsValue().otp,
              },
            },
          },
        });
        const sessionToken = get(
          loginRes,
          "data.logInWith.viewer.sessionToken"
        );
        if (sessionToken && authContext) {
          authContext.set("user", get(loginRes, "data.logInWith.viewer"));
          navigate(get(location, "state.from.pathname", "/"), {
            replace: true,
           
          });
          
        }
        
      }
    }
  }

  return (

    <div className={styles.page}>
      <div className={styles.loginBox}>
      <div className="logo1 mb-4">
                  <img src={logo} alt="inspacco-logo" className={styles.Logo} />
                </div>
        <Form
          layout="vertical"
          form={form}
          name="login-form"
          onFinish={onFormSubmit}
          initialValues={{ mobileNumber: "" }}
        >
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            required
            hidden={step === "ENTER_OTP"}
            rules={[
              {
                required: true,
                message: "Enter valid mobile number",
              },
            ]}
          >
            <Input placeholder="Enter mobile number"  />
          </Form.Item>
          <Form.Item
            name="otp"
            label="OTP"
            required
            hidden={step === "GENERATE_OTP"}
            rules={[
              {
                required: true,
                message: "Enter OTP",
              },
            ]}
          >
            <Input placeholder="Enter OTP" />
          </Form.Item>

          <Form.Item hidden={step === "ENTER_OTP"}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: "100%" }}
              onClick={onFormSubmit}
            >
              Generate OTP
            </Button>
          </Form.Item>

          <Form.Item hidden={step === "GENERATE_OTP"}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: "100%" }}
              onClick={onFormSubmit}
            >
              Verify & Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
