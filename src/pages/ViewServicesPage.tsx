import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Button, Table, Tooltip, Modal, Input, Form, Layout, Select } from "antd";
import { PlusOutlined, EditOutlined, FolderViewOutlined } from '@ant-design/icons';
import { ColumnType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { SEARCH_USER } from "../graphql/queries/user/searchUsers";
import { GET_SERVICES } from "../graphql/queries/service/getServices";
import { DocumentList } from "../models/DocumentList";
//import { User } from "../models/User";
import { IService } from "../models/Service";
import { GET_SERVICE_BY_ID } from "../graphql/queries/service/getService";
import form from "antd/lib/form";
import { UPDATE_SERVICE } from "../graphql/mutations/service/updateService";
import { IServiceTask } from "../models/ServiceTask";
import { identity, keys, size } from "lodash";
import{useNavigate} from "react-router-dom";
import { match } from "assert";
import * as biIcons from "react-icons/bi"
import { GrView } from "react-icons/gr";
import "../styles/ViewServices.css"
const { Option } = Select;

export default function ViewServices(match: any) {
const navigate = useNavigate();
  const formRef = React.createRef();
  const [form] = Form.useForm<IService>();
  const [dataSource1, setDataSource1] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [serviceId, setServiceId] = useState<string>();
  const [serviceTaskId, setServiceTaskId] = useState<string>();

  const { data: servicesRes, loading } =
    useQuery<DocumentList<"services", IService>>(GET_SERVICES);

  const [updateService] = useMutation(UPDATE_SERVICE);
  const [getService] = useLazyQuery(GET_SERVICE_BY_ID, {
    fetchPolicy: 'cache-and-network',
  });

  const onUpdateService = async (data: any) => {
    console.log(data);
    try {
      data['id']=serviceId;
      const serviceData = await updateService(
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

  const onFetchData = (data: IService) => {
    console.log(data);
    setIsEditing(true);
    setServiceId(data.id);
    form.setFieldsValue({
      id: data.id,
      name: data.name,
      description: data.description,
      requireAttendance: data.requireAttendance
    })
  }

  // const onFetchTask = (data: IServiceTask) => {
  //   data['objectId']=serviceId;
  //   console.log(data);
  //   setServiceTaskId(data.id);
  //    form.setFieldsValue({
  //     id: data.id
  //   })
  // }

  const onUpdateTask = async (data: any) => {
    console.log(data.objectId);
    navigate(`/viewTask/${data.objectId}`);
     // data['id']=serviceTaskId;
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingService(null)
  }
  //for attendance component
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


  const columns = [
    {
      title: " Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Oprations",
      render: (data: IService) => {
        return (<>
          <Tooltip title="Edit Record">

            <Button className="EditButton" style={styles.editButton} onClick={() => {
              onFetchData(data)
            }} ><biIcons.BiEditAlt style={{ marginLeft: "-12px",width:"25px", height:"25px" }} />
            </Button>
          </Tooltip>
        </>
        );
      }
    },
    {
      title: "Task",
      render: (data:IServiceTask) => (
        <Tooltip title="View Task">
          {/* <Link to={`/viewTask`}  > */}
          <Button style={styles.editButton} onClick={() => {
              onUpdateTask(data)
            }} ><GrView  style={{ marginLeft:"-12px", width:"25px", height:"25px" }} />
            </Button>
            {/* </Link> */}
        </Tooltip>
        
      )
    },
  ];

  const dataSource = servicesRes?.services?.edges.map(({ node }) => node);

  return (
    <>
      <Link style={styles.Link} to="/Add_servicesdetails">
        <Button className="addButton" style={styles.Button}>+ Add</Button>
      </Link>
      <Table style={styles.Table}
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        scroll={{ y: 420 }}
        size="middle" />


      {/* modal for updating data */}
      <Modal
        title="Edit Service"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();

        }}
        footer={null}
      >
        <Form
          {...Layout}
          form={form}
          name="basic"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onUpdateService}
          //onChange={onFetchData}
          //onFinishFailed={update}
          autoComplete="off"
          className="add_servicesdetails"
        >
          {/* <Form.Item
            name="id"
            rules={[{ message: 'Please enter Service Name!', type: "string" }]}
          >
            <Input size="large" placeholder="Service Name" style={{ marginTop: "30px", marginLeft: "70%" }} id="formIn"
            />
          </Form.Item> */}
          <label>Service Name:</label>
          <Form.Item
            name="name"
            rules={[{ message: 'Please enter Service Name!', type: "string" }]}
          >
            <Input size="large" placeholder="Service Name" style={{ marginTop: "10px" }} id="formIn"
            />
          </Form.Item>
          <label>Description:</label>
          <Form.Item
            name="description"
            rules={[{ message: 'Please enter description!' }]}
          >
            <Input.TextArea showCount maxLength={500} placeholder="Description" style={{ marginTop: "10px", width: "100%", height: "60%" }} id="formIn"
              name="description" />
          </Form.Item>
          <label>Need Attendance:</label>
          <Form.Item
            name="requireAttendance"
            // label="Need Attendance"

          >
            <Select
              placeholder="Need Attendance"
              onChange={onAttendanceChange}
              allowClear
              style={{marginTop: "10px"}}
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
            <Button type="primary" htmlType="submit" style={{ marginTop: "2%", width: "150px" }}
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
  Link: {
    marginLeft: "86%"
  },
  Table: {
    marginTop: "15px"
  },
  Button: {
    background: "rgb(3, 56, 106)",
    textDecoration:"none",
    fontWeight:"500",
    color:"white",
    fontSize:"15px"
  },
  
  editButton: {
    marginLeft: "10px",
    width: "20px",
    border:"none"
    // backgroundColor: "#9b82d1"
    
  },
  EditOutlined: {
    margineLeft: "-6px"
  },
  viewButton: {
    marginLeft: "10px",
    width: "20px",
    backgroundColor: "rgb(132 220 107)"
  },
};