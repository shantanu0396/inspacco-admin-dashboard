import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Layout, Table, Tooltip } from "antd";
import {PlusOutlined,EditOutlined} from '@ant-design/icons';
import { ColumnType } from "antd/lib/table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GET_PARTNERS } from "../graphql/queries/partner/getPartners";
import { DocumentList } from "../models/DocumentList";
import { IPartner } from "../models/Partner";
import Modal from "antd/lib/modal/Modal";
import { UPDATE_PARTNER } from "../graphql/mutations/partner/updatePartner";
export default function ViewPartner() {

  const [form] = Form.useForm();
  const [partnerId, setPartnerId] = useState<string>();
  const [isEditing, setIsEditing] = useState(false)

  const [updatePartner] = useMutation(UPDATE_PARTNER);
  

  const onUpdatePartner = async (data: any) => {
    console.log(data);
    try {
      data['id']=partnerId;
      const serviceData = await updatePartner(
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
  
  const onFetchData =(data:IPartner)=>{
    setIsEditing(true);
    setPartnerId(data.id);
    form.setFieldsValue({
      name: data.name,
      address: data.address,
      gstNumber: data.gstNumber,
      pan: data.pan,
      services: data.services,
      status: data.status
    })
  }

  const { data: partnerRes, loading } =
    useQuery<DocumentList<"partners", IPartner>>(GET_PARTNERS);
  const columns = [
    {
      title: " Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "GST Number",
      dataIndex: "gstNumber",
    },
    {
      title:"Oprations",
      render:(data: IPartner)=>{
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
    }
     
  ];

  const dataSource = partnerRes?.partners?.edges.map(({ node }) => node);

  return (
    <>
    <Link style={styles.Link} to="/AddPartner">
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
            wrapperCol={{ span: 9 }}
            initialValues={{ remember: true }}
            {...Form}
            form={form}
            onFinish={onUpdatePartner}
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
              name="address"
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
