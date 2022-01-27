import React, { useState } from 'react';
import { Drawer,Space,Radio } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Switch  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import { SearchOutlined, PlusOutlined} from '@ant-design/icons';

const Add_tasks = () => {
    const state = {
        value: 1,
      };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function onChange(checked: any) {
    console.log(`switch to ${checked}`);
  }

  const [visible, setVisible] = useState(false);
  const [placement] = useState<DrawerProps['placement']>('bottom');
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  

  return (
    <Layout style={{backgroundColor:"#ccd0d321",marginTop:"-48%"}}>
        <Content>
        <Header className='homeHeader'>
                    <div className="detail_header">
                        <Link to='/Edit_socityData' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
                        <span className="service_title">Socity Member</span>
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
        name="Person"
        rules={[{ required: true, message: 'Please enter Summary !' }]}
       >
        <Input size="large" placeholder="Person"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"  onClick={showDrawer}/>
      <Drawer
        title="Search User"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
              <Link to="/Add_socityMember">
            <Button type="primary">
              New User
            </Button>
            </Link>
          </Space>
        }
      >
          <div className="searchDiv">
          <Input size="large" placeholder="Search" prefix={<SearchOutlined />} className="search" />
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </Form.Item>
      <Form.Item 
        name="Member Type"
       style={{marginLeft:"35%",marginTop:"60px"}}>
            <label>Member type</label>
        <Radio.Group style={{marginTop:"10px"}}>
        <Space direction="horizontal" >
          <Radio value={1} >Society Admin</Radio>
          <Radio value={2}>Society Manager</Radio>
        </Space>
      </Radio.Group>
      </Form.Item>
      <Form.Item 
        name="subtype"
        rules={[{ required: true, message: 'Please enter subtype!' }]}
       >
        <Input size="large" placeholder="SubType"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
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

export default Add_tasks