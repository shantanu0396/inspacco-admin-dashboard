// import React, { useState } from 'react';
// import { Drawer,Space,Radio } from 'antd';
// import { DrawerProps } from 'antd/es/drawer';
// import { Input, Layout, } from "antd";
// import { Header } from 'antd/lib/layout/layout';
// import { Form, Button, Switch  } from 'antd';
// import { Content } from "antd/lib/layout/layout";
// import { Link } from "react-router-dom";
// import * as faIcons from "react-icons/fa";
// import { SearchOutlined, PlusOutlined} from '@ant-design/icons';

// const Add_socityMember = () => {
//     const state = {
//         value: 1,
//       };
//   const onFinish = (values: any) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

//   function onChange(checked: any) {
//     console.log(`switch to ${checked}`);
//   }

//   const [visible, setVisible] = useState(false);
//   const [placement] = useState<DrawerProps['placement']>('bottom');
//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };
  

//   return (
//     <Layout style={{backgroundColor:"#ccd0d321"}}>
//         <Content>
//         <Header className='homeHeader'>
//                     <div className="detail_header">
//                         <Link to='/Edit_socityData' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
//                         <span className="service_title">Socity Member</span>
//                     </div>
//                 </Header>
//         <div className="formData">
        
//         <Form
//       name="basic"
//       wrapperCol={{ span: 9 }}
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//       className="add_servicesdetails"
//     >
//       <Form.Item 
//         name="Person"
//         rules={[{ required: true, message: 'Please enter Summary !' }]}
//        >
//         <Input size="large" placeholder="Person"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"  onClick={showDrawer}/>
//       <Drawer
//         title="Search User"
//         placement={placement}
//         width={500}
//         onClose={onClose}
//         visible={visible}
//         extra={
//           <Space>
//               <Link to="/Add_NewSocietyMember">
//             <Button type="primary">
//               New User
//             </Button>
//             </Link>
//           </Space>
//         }
//       >
//           <div className="searchDiv">
//           <Input size="large" placeholder="Search" prefix={<SearchOutlined />} className="search" />
//         </div>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//       </Form.Item>
//       <Form.Item 
//         name="Member Type"
//        style={{marginLeft:"35%",marginTop:"60px"}}>
//             <label>Member type</label>
//         <Radio.Group style={{marginTop:"10px"}}>
//         <Space direction="horizontal" >
//           <Radio value={1} >Society Admin</Radio>
//           <Radio value={2}>Society Manager</Radio>
//         </Space>
//       </Radio.Group>
//       </Form.Item>
//       <Form.Item 
//         name="subtype"
//         rules={[{ required: true, message: 'Please enter subtype!' }]}
//        >
//         <Input size="large" placeholder="SubType"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"/>
//       </Form.Item>
//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        
//         <Button type="primary" htmlType="submit" style={{marginTop:"2%", marginLeft: "30%",width: "224px"}}>
//           Save
//         </Button>
//       </Form.Item>

      
//     </Form>
//     </div>
//         </Content>
//     </Layout>
    
//   );
// };

// export default Add_socityMember

import React, { useState } from 'react';
import { Drawer,Space,Radio,Table, Tooltip } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import { Input, Layout, Select } from "antd";
import { Header } from 'antd/lib/layout/layout';
import { Form, Button, Switch  } from 'antd';
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as faIcons from "react-icons/fa";
import { SearchOutlined, PlusOutlined} from '@ant-design/icons';
import {User} from "../models/User"
import { useQuery } from '@apollo/client';
import { DocumentList } from '../models/DocumentList';
import { GET_USER } from '../graphql/queries/user/getUser';
import { SEARCH_USER } from '../graphql/queries/user/searchUsers';
import { table } from 'console';
const { Option } = Select;
const Add_socityMember = () => {
  const [userName, setUser] = useState<string>();

  const { data: userRes, loading } =
    useQuery<DocumentList<"users", User>>(SEARCH_USER,{
    });
    console.log(userRes);
    // const onFetch = (data: User) => {
    //   console.log(data);
    //   //setUserId(data.id);
    //   data.firstName;
      
    // }
    
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
  
  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "mobileNumber",
      dataIndex: "mobileNumber",
    },
    {
      title:"Oprations",
      render:()=>{
        return (<>
      <Tooltip title="Select record">
          <Button>Select record
          </Button>
        </Tooltip>
        </>
        );
      }
    },
  ];
  const dataSource = userRes?.users?.edges.map(({ node }) => node);

  return (
    <Layout style={{backgroundColor:"#ccd0d321"}}>
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
        {/* <Input size="large" placeholder="Person"  style={{marginTop:"30px",marginLeft:"90%"}} id="formIn"  onClick={showDrawer}/>
      <Drawer
        title="Search User"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
              <Link to="/Add_NewSocietyMember">
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
        <Table columns={columns}
         dataSource={dataSource}
          loading={loading}
        scroll={{ y: 370 }}
        pagination={false}
        size="middle"/>
      </Drawer> */}
      <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    //value={}
  >
    
  </Select>
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

export default Add_socityMember