
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { useLazyQuery, useMutation } from "@apollo/client";
import ISociety from "../models/Society"
import { CREATE_SOCEITY } from "../graphql/mutations/society/createSociety";
import { parseInt } from "lodash";
import { Link, Route } from "react-router-dom";
import { get } from "react-hook-form/dist/utils";
import * as biIcons from "react-icons/bi";
const AddSociety = () => {
  
    
  const [form] = Form.useForm<ISociety>();
  const [saveSociety] = useMutation(CREATE_SOCEITY);
  const save = async (data: ISociety) => {
    try {
      const saveSocietyRes = await saveSociety({
        variables: {
          ...data,
          pincode: parseInt(data.pincode!),

        }


      });
      alert("Data added successfully")
      console.log(data)
    } catch (error) {

    }
  };
  return (
    <Layout style={{ backgroundColor: "#ccd0d321" }}>
      <Content>
        {/* <Header className='homeHeader' style={{ backgroundColor: "#e8edef" }}>
        
          <div style={{ marginLeft: "35%", fontSize: "16px", fontWeight: "bold" }}>Society Details</div>
        </Header> */}
        <Link to='/ViewSocity'><biIcons.BiArrowBack height="35px" width="35px" 
        style={{border:"2px solid #0493cd",
        height:"35px",
        width:"35px", 
        borderRadius:"50%", 
        color:"black",
        marginTop:"10px",
        marginLeft:"10px"
        }}/></Link>
        <div className="formData" style={{ backgroundColor: "#e8edef", boxShadow: "7px 7px 5px 0px rgb(181 181 181)", paddingBottom: "10px" }}>
        <div style={{ marginLeft: "40%", fontSize: "26px", fontWeight: "bold" }}>Society Details</div>
        <div style={{ height: "5px", width: "190px", backgroundColor: "blue", marginLeft: "25rem" }}></div>
          <Form
            {...Layout} form={form}
            name="basic"
            wrapperCol={{ span: 9 }}
            initialValues={{ remember: true }}
            onFinish={save}
            // onSubmit={handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="AddSociety"
            style={{marginTop:"20px"}}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter Society Name!' }]}

            >
              <Input size="large" placeholder="Society Name" style={{ marginTop: "5px", marginLeft: "80%" }} id="formIn"
              />
            </Form.Item>

            <Form.Item
              name="addressLine1"
              rules={[{ required: true, message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 1" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="addressLine2"
              rules={[{ required: true, message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 2" style={{ marginLeft: "80%" }} id="formIn"
              />
            </Form.Item>
            <Form.Item
              name="pincode"
              rules={[{ message: 'Please enter pincode!' }]}
            >
              <Input size="large" placeholder="Pincode" style={{ marginLeft: "80%" }} id="formIn" name="pincode" />
            </Form.Item>
            <Form.Item
              name="area"
              rules={[{ required: true, message: 'Please enter area!' }]}
            >
              <Input size="large" placeholder="Area" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="city"
              rules={[{ required: true, message: 'Please enter city!' }]}
            >
              <Input size="large" placeholder="City" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="state"
              rules={[{ required: true, message: 'Please enter city!' }]}
            >
              <Input size="large" placeholder="State" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ marginTop: "2%", marginLeft: "19px", width: "224px" }}
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>

  );
};

export default AddSociety