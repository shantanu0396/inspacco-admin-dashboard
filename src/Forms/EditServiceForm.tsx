
import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Select  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { IService } from "../models/Service";
import { CREATE_SERVICE } from "../graphql/mutations/service/createService";
import { ApolloError, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { STATUS } from "../constants/Common";
import{GET_SERVICE_BY_ID} from "../graphql/queries/service/getService"
import { size } from "lodash";
const { Option } = Select;


const EditServiceForm = (route: any) => {
  const [form] = Form.useForm<IService>();
  const [getService] = useLazyQuery(GET_SERVICE_BY_ID, {
    fetchPolicy: 'cache-and-network',
    onCompleted: resetServiceValues,
  });

  function resetServiceValues(data: { service: any; }) {
    reset(data.service);
  }

  async function onScreenLoad() {
    getService({
      variables: { id: route.params.serviceId,
                   name: route.params.name },
    });
    console.log('id fetched')
  }

  
  const onAttendanceChange = (value: any) => {
    switch (value) {
      case true:
        form.setFieldsValue({
        });
        return;

      case false:
        form.setFieldsValue({
         
        });
        return;
    }
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
  

  return (
    <Layout style={{backgroundColor:"#ccd0d321"}}>
        <Content>
        <Header className='homeHeader' style={{backgroundColor:"#e8edef"}}>
                   <div style={{marginLeft:"35%",fontSize:"16px",fontWeight:"bold"}}>Service Details</div>
                   </Header>
        <div className="formData">
        <Form
        {...Layout}
        form={form}
      name="basic"
      wrapperCol={{ span: 9 }}
      initialValues={{ remember: true }}
      //onFinish={getService}
      onFinishFailed={onFinishFailed}
      onLoad={onScreenLoad}
      autoComplete="off"
      className="EditServiceForm"
    >
      <Form.Item 
        name="name"
        rules={[{ message: 'Please enter Service Name!' ,type:"string" }]}
       >
        <Input size="large"  style={{marginTop:"30px",marginLeft:"70%"}} id="formIn"
             name="servicename"
              />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ message: 'Please enter description!' }]}
      >
        <Input.TextArea showCount maxLength={500} placeholder="Description" style={{marginTop:"30px",marginLeft:"70%",width:"100%",height:"60%"}} id="formIn" 
         name="description"/>
      </Form.Item>

      <Form.Item
        name="requireAttendance"
        label="Need Attendance"
        
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onAttendanceChange}
          allowClear
        >
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
         
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.attendance !== currentValues.attendance}
      >
        {({ getFieldValue }) =>
          getFieldValue('attendance') === 'other' ? (
            <Form.Item
              name="attendace"
              label="Customize attendance"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{marginTop:"2%",width: "224px"}} 
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

export default EditServiceForm

function reset(service: any) {
    throw new Error("Function not implemented.");
}
