import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Layout, Modal, Table, Tooltip } from "antd";
import {PlusOutlined,EditOutlined} from '@ant-design/icons';
import { ColumnType } from "antd/lib/table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getSocietyMemberSubquery ,GET_SOCIETIES } from "../graphql/queries/society/getSocieties";
import { DocumentList } from "../models/DocumentList";
import ISociety from "../models/Society"
import { render } from "@testing-library/react";
import{useNavigate} from "react-router-dom";
import{UPDATE_SOCIETY} from "../graphql/mutations/society/updateSociety"
export default function ViewSocity() {
  const navigate = useNavigate();
  const [serviceEditId, setServiceEditId] = useState<string>();

  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [societyId, setSocietyId] = useState<string>();
  const { data: societyRes, loading } =
    useQuery<DocumentList<"societies", ISociety>>(GET_SOCIETIES);

    const [updateSociety] = useMutation(UPDATE_SOCIETY);
  

  const onUpdateSociety = async (data: any) => {
    console.log(data);
    try {
      data['id']=societyId;
      const serviceData = await updateSociety(
        {
          variables: {
            ...data
          }
        });
      console.log(data)
      alert("Data updated sucessfully")

    } catch (error) {

    }
  };

    const onFetchData =(data:ISociety)=>{
      setIsEditing(true);
      setSocietyId(data.id);
      form.setFieldsValue({
        name: data.name,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        pincode: data.pincode,
        area: data.area,
        city: data.city,
        state: data.state
        

      })
    }

    const onViewClick = async (data: any) => {
      console.log(data.objectId);
      navigate(`/Edit_socityData/${data.objectId}`);
       // data['id']=serviceTaskId;
    };

  const columns = [
    {
      title: " Name",
      dataIndex: "name",
    },
    {
      title: "AddressLine1",
      dataIndex: "addressLine1",
    },
    {
      title: "AddressLine2",
      dataIndex: "addressLine2",
    },
    {
      title:"Oprations",
      render:(data: ISociety)=>{
        return (<>
      <Tooltip title="Edit record">
          <Button style={styles.editButton} onClick={()=>{
            onFetchData(data)
          }} ><EditOutlined style={{marginLeft:"-6px"}} />
          </Button>
        </Tooltip>
        </>
        );
      }
    },
    {
      title: "Task",
      render: (data:any) => (
        <Tooltip title="View Task">
          {/* <Link to={`/viewTask`}  > */}
          <Button style={styles.editButton} onClick={() => {
              onViewClick(data)
            }} ><EditOutlined style={{ marginLeft: "-6px" }} />
            </Button>
            {/* </Link> */}
        </Tooltip>
      )
    },
    
    
  ];

  const dataSource = societyRes?.societies?.edges.map(({ node }) => node);

  return (
    <>
   <Link style={styles.Link} to="/AddSociety">
     <Button style={styles.Button}><PlusOutlined style={{ marginRight: "2px" }} /> Add</Button>
     </Link>
    <Table style={styles.Table}
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      scroll={{ y: 370 }}
      size="middle" />

<Modal
      title="Edit Socity"
      visible={isEditing}
      okText="Save"
      onCancel={()=>{
        setIsEditing(false);
      }}
      
      footer={null}
       >

         <Form
            {...Form} form={form}
            name="basic"
            wrapperCol={{ span: 9 }}
            initialValues={{ remember: true }}
            onFinish={onUpdateSociety}
            // onSubmit={handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="AddSociety"
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
              rules={[{  message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 1" style={{ marginLeft: "80%" }} id="formIn" />
            </Form.Item>
            <Form.Item
              name="addressLine2"
              rules={[{  message: 'Please enter address line!' }]}
            >
              <Input size="large" placeholder="Address Line 2" style={{ marginLeft: "80%" }} id="formIn"
              />
            </Form.Item>
            <Form.Item
              name="pincode"
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
                Update
              </Button>
            </Form.Item>
            </Form>
             
       </Modal>
      </>
  );
}

const styles = {
  Link:{
    marginLeft: "86%"
  },
  Table:{
    marginTop: "15px"
  },
  Button:{
    background: "#fab143"
  },
  editButton:{
      marginLeft: "10px",
      width: "20px",
      backgroundColor: "#9b82d1"
  },
  EditOutlined:{
      margineLeft:"-6px"
  }
};