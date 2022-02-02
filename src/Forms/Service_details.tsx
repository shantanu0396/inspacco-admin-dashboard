import { Input, Layout, } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Select } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { IService } from "../models/Service";
import { CREATE_SERVICE } from "../graphql/mutations/service/createService";
import { useMutation } from "@apollo/client";
import { STATUS } from "../constants/Common";
import * as biIcons from "react-icons/bi"
import { Link } from "react-router-dom";
const { Option } = Select;


function Add_servicesdetails() {
  const [form] = Form.useForm();


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

  const [createService] = useMutation(CREATE_SERVICE);
  const save = async (data: IService) => {
    try {
      data.status = STATUS.active;
      const serviceData = await createService({ variables: { fields: data } });
      console.log(data)
      alert("Data added successfully")

    } catch (error) {

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
    <Layout style={{ backgroundColor: "#ccd0d321" }}>
      <Content>
        {/* <Header className='homeHeader' style={{backgroundColor:"#e8edef"}}>
                   <div style={{marginLeft:"35%",fontSize:"16px",fontWeight:"bold"}}>Service Details</div>
                   </Header> */}
        <Link to='/ViewServices'><biIcons.BiArrowBack height="35px" width="35px" 
        style={{border:"2px solid #0493cd",
        height:"35px",
        width:"35px", 
        borderRadius:"50%", 
        color:"black",
        marginTop:"10px",
        marginLeft:"10px"
        }}/></Link>
        <div className="formData" style={{ backgroundColor: "#e8edef", boxShadow: "7px 7px 5px 0px rgb(181 181 181)", paddingBottom: "30px", paddingTop: "20px" }}>
          <div style={{ marginLeft: "35%", fontSize: "26px", fontWeight: "bold" }}>Service Details</div>
          <div style={{ height: "5px", width: "190px", backgroundColor: "blue", marginLeft: "22rem" }}></div>

          <Form
            {...Layout}
            form={form}
            name="basic"
            wrapperCol={{ span: 9 }}
            initialValues={{ remember: true }}
            onFinish={save}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="add_servicesdetails"
          >
            <Form.Item
              name="name"
              rules={[{ message: 'Please enter Service Name!', type: "string" }]}
            >
              <Input size="large" placeholder="Service Name" style={{ marginTop: "30px", marginLeft: "70%" }} id="formIn"
                name="servicename" />
            </Form.Item>

            <Form.Item
              name="description"
              rules={[{ message: 'Please enter description!' }]}
            >
              <Input.TextArea showCount maxLength={500} placeholder="Description" style={{ marginTop: "30px", marginLeft: "70%", width: "100%", height: "60%" }} id="formIn"
                name="description" />
            </Form.Item>

            <Form.Item
              name="requireAttendance"
            // label="Need Attendance"

            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
            >
              <Select
                placeholder="Need Attendance"
                onChange={onAttendanceChange}
                allowClear
                style={{ marginLeft: "70%", marginTop: "30px" }}
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
              <Button type="primary" htmlType="submit" style={{ marginTop: "2%", width: "224px" }}
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

export default Add_servicesdetails