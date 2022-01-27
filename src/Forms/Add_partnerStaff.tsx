
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Switch  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Add_partnerStaff = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(checked: any) {
    console.log(`switch to ${checked}`);
  }

  return (
    <Layout style={{backgroundColor:"#ccd0d321",marginTop:"-48%"}}>
        <Content>
        <Header className='homeHeader'>
                    <div className="detail_header">
                        <Link to='/Edit_partnerData' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
                        <span className="service_title" style={{marginLeft:"28%"}}>Add Partner Staff</span>
                    </div>
                </Header>
        <div className="formData">
        <Form
      name="basic"
      wrapperCol={{ span: 9 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="add_servicesdetails"
    >
       <Form.Item 
        name="staffProfile"
        rules={[{ required: true, message: 'Please enter Name !' }]}
       >
        <Avatar size={120} icon={<UserOutlined />} className="formAvtar" />
      </Form.Item>
      <Form.Item 
        name="staffFirstName"
        rules={[{ required: true, message: 'Please enter First Name !' }]}
       >
        <Input size="large" placeholder="First Name"  style={{marginTop:"20px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="staffLastName"
        rules={[{ required: true, message: 'Please enter Last Name!' }]}
       >
        <Input size="large" placeholder="Last Name"  style={{marginTop:"20px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="staffContact"
        rules={[{ required: true, message: 'Please enter Mobile Number!' }]}
       >
        <Input size="large" placeholder="Mobile Number"  style={{marginTop:"20px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="staffAddress"
        rules={[{ required: true, message: 'Address!' }]}
       >
        <Input size="large" placeholder="Address"  style={{marginTop:"20px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{marginTop:"2%", marginLeft: "30%",width: "224px"}}>
          Save
        </Button>
      </Form.Item>

      
    </Form>
    </div>
        </Content>
    </Layout>
    
  );
};

export default Add_partnerStaff