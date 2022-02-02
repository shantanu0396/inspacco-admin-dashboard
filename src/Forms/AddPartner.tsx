
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { IPartner } from "../models/Partner";
import { CREATE_PARTNER } from "../graphql/mutations/partner/createPartner";
import { useMutation } from "@apollo/client";
import { STATUS } from "../constants/Common";
import * as biIcons from "react-icons/bi"
import { Link } from "react-router-dom";
const AddPartner = () => {
  const [form] = Form.useForm<IPartner>();
  const [savePartner] = useMutation(CREATE_PARTNER);
  
  const save = async (data: IPartner) => {
    data.status = STATUS.active;
    const partnerData = await savePartner({ variables: { fields: data } });
    console.log(data)
    alert("Added data Successful")
  };
  return (
    <Layout >
      <Content>
        {/* <Header className='homeHeader' style={{ backgroundColor: "#e8edef" }}>
          <div style={{ marginLeft: "45%", fontSize: "16px", fontWeight: "bold" }}>Partner  Details</div>
        </Header> */}
         
        <div className="formData"  style={{ backgroundColor: "#e8edef", boxShadow: "7px 7px 5px 0px rgb(181 181 181)", paddingBottom: "30px", paddingTop: "20px" }}>
        <Link to='/ViewPartner'><biIcons.BiArrowBack height="35px" width="35px" 
        style={{border:"2px solid #0493cd",
        height:"35px",
        width:"35px", 
        borderRadius:"50%", 
        color:"black",
        marginTop:"10px",
        marginLeft:"10px"
        }}/></Link>
        <div style={{ marginLeft: "35%", fontSize: "26px", fontWeight: "bold" }}>Partner Details</div>
          <div style={{ height: "5px", width: "190px", backgroundColor: "blue", marginLeft: "22rem" }}></div>
          <Form
            wrapperCol={{ span: 9 }}
            initialValues={{ remember: true }}
            {...Layout}
            form={form}
            onFinish={save}
            autoComplete="off"

          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter partner Name!' }]}
            >
              <Input size="large" placeholder="Partner Name" style={{ marginTop: "30px", marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="pan"
              rules={[{ required: false, message: 'Please enter PAN Number !' }]}
            >
              <Input size="large" placeholder="PAN" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="gstNumber"
              rules={[{ required: false, message: 'Please enter GST!' }]}
            >
              <Input size="large" placeholder="GST Number" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.addressLine1"
              rules={[{ required: false, message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 1" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.addressLine2"
              rules={[{ required: false, message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 2" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.area"
              rules={[{ required: false, message: 'Please enter area!' }]}
            >
              <Input size="large" placeholder="Area" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.city"
              rules={[{ required: false, message: 'Please enter city!' }]}
            >
              <Input size="large" placeholder="City" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.state"
              rules={[{ required: false, message: 'Please enter city!' }]}
            >
              <Input size="large" placeholder="State" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="address.pincode"
              rules={[{ required: false, message: 'Please enter pincode!' }]}
            >
              <Input size="large" placeholder="Pincode" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ marginTop: "2%", marginLeft: "19px", width: "224px" }}>
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>

  );
};

export default AddPartner