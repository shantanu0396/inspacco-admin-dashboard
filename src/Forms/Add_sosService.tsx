
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Switch  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const Add_sosService = () => {
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
                        <Link to='/Edit_socityData' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
                        <span className="service_title" style={{marginLeft:"25%"}}>Add Service Subscription</span>
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
        name="Service"
        rules={[{ required: true, message: 'Please enter Service !' }]}
       >
        <Input size="large" placeholder="Service"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item 
        name="Partner"
        rules={[{ required: true, message: 'Please enter Partner!' }]}
       >
        <Input size="large" placeholder="Partner"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
      </Form.Item>
      <Form.Item label="Start Date" style={{marginLeft:"35%",marginTop:"8%"}}>
        <DatePicker style={{height:"50px",width:"100%"}} id="formIn" />
      </Form.Item>
      <Form.Item label="End Date" style={{marginLeft:"35%",marginTop:"5%"}}>
        <DatePicker style={{height:"50px",width:"100%"}} id="formIn" />
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

export default Add_sosService