import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Button, Table, Tooltip, Modal, Input, Form, Layout, Select } from "antd";
import { PlusOutlined, EditOutlined, FolderViewOutlined } from '@ant-design/icons';
import { ColumnType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { DocumentList } from "../models/DocumentList";
import { GET_SERVICE_TASKS } from "../graphql/queries/serviceTask/getServiceTasks";
import { IServiceTask } from "../models/ServiceTask";
import { IService } from "../models/Service"
import form from "antd/lib/form";
import { useLocation, } from "react-router-dom";
import { useParams } from "react-router";
import { KeyObject } from "crypto";
import { STATUS } from "../constants/Common";
import { CREATE_SERVICE_TASK } from "../graphql/mutations/serviceTask/createServiceTask";

export type TaskAttributes = {
  summary: string;
  description?: string;
  rewardPoints: number;
  frequency:string;
  dayInWeek?: number;
  dayInMonth?: number;
  startDate?: Date;
  endDate?: Date;
};

export default function ViewTask() {
  const { id } = useParams();
  const [serviceId, setServiceId] = useState<string>();
  const [isAdding, setIsAdding] = useState(false)
  const [addingService, setAddingService] = useState(null)

  useEffect(() => {
    setServiceId(id);
    getTasks({
      serviceId,
    });
    
  }, [id])

  const { data, loading, refetch: getTasks} = useQuery<
    DocumentList<'service', IService>>
    (GET_SERVICE_TASKS, {
      skip: !serviceId,
      variables: {
        serviceId

      },
    });

  //   const { data, loading, refetch: getTasks } = useQuery<
  //   Document<'service', IService>
  // >(GET_SERVICE_TASKS, {
  //   variables: {
  //     serviceId,
  //   },
  // });

  // const dataSource = data?.services?.edges.map(({ node }) => node)
  console.log(data?.service?.edges);

  //ADD DATA

  const [form] = Form.useForm<TaskAttributes>();
  const [createServiceTask] = useMutation(CREATE_SERVICE_TASK);

  async function saveTask(data: TaskAttributes) {
    await createServiceTask({
      variables: {
        serviceId,
        ...data,
       // rewardPoints: parseInt(data.rewardPoints.toString()!),
      },
    })
    alert("Added data Successful")
    console.log("data added ")
  } ;
  
  
  const onFetchData = () => {
    setIsAdding(true);
    
  }


  const resetAdding = () => {
    setIsAdding(false);
    setAddingService(null)
    
  }

  const columns = [

    {
      title: " Summary",
      dataIndex: "summary",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
    },
    // {
    //   title: "Task",
    //   render: () => (
    //     <Tooltip title="Edit record">
    //       <Link to="/viewTaskPage" >
    //         <Button style={styles.viewButton} ><EditOutlined style={{ marginLeft: "-6px" }} />
    //         </Button> </Link>
    //     </Tooltip>
    //   )
    // }
  ];



  return (
    <>
      {/* <Link style={styles.Link} to="/AddTask"> */}
        <Button style={styles.Button} onClick={() => {
              onFetchData()
            }}><PlusOutlined style={{ marginRight: "2px" }} /> Add</Button>
      {/* </Link> */}
      <Table style={styles.Table} key={serviceId}
       // dataSource={data?.service}
        columns={columns}
        loading={loading}
        scroll={{ y: 370 }}
        size="middle" />

      <Modal
        title="Add task"
        visible={isAdding}
        okText="Save"
        onCancel={() => {
          resetAdding();

        }}
        footer={null}
      >
        <Form
        {...form}
        form={form}
        onFinish={saveTask}
        >
          <Form.Item
            name="summary"
            rules={[{ required: true, message: 'Please enter Summary !' }]}
          >
            <Input size="large" placeholder="Summary" style={{ marginTop: "30px" }} id="formIn" />
          </Form.Item>
          <Form.Item
            name="Description"
            //rules={[{ required: true, message: 'Please enter Description!' }]}
          >
            <Input size="large" placeholder="Description" style={{ marginTop: "30px" }} id="formIn" />
          </Form.Item>
          <Form.Item
            name="Reward points"
           // rules={[{ required: true, message: 'Please enter Rewards Points!' }]}
          >
            <Input size="large" placeholder="Rewards Point" style={{ marginTop: "30px" }} id="formIn" />
          </Form.Item>
          <Form.Item
            name="frequency"
            //rules={[{ required: true, message: 'Frequency!' }]}
          >
            <Input size="large" placeholder="Frequencye" style={{ marginTop: "30px" }} id="formIn" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ marginTop: "2%", marginLeft: "10%", width: "224px" }}>
              Save
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
    background: "#71b3c1"
  },
  editButton: {
    marginLeft: "10px",
    width: "20px",
    backgroundColor: "#9b82d1"
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
