
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Switch  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";

const AddTask = () => {
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
    <Layout>
        <Content>
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
        name="summary"
        rules={[{ required: true, message: 'Please enter Summary !' }]}
       >
        <Input size="large" placeholder="Summary"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="Description"
        rules={[{ required: true, message: 'Please enter Description!' }]}
       >
        <Input size="large" placeholder="Description"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="Reward points"
        rules={[{ required: true, message: 'Please enter Rewards Points!' }]}
       >
        <Input size="large" placeholder="Rewards Point"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="frequency"
        rules={[{ required: true, message: 'Frequency!' }]}
       >
        <Input size="large" placeholder="Frequencye"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{marginTop:"2%", marginLeft: "10%",width: "224px"}}>
          Save
        </Button>
      </Form.Item>

      
    </Form>
    </div>
        </Content>
    </Layout>
    
  );
};

export default AddTask