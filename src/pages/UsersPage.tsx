import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { SEARCH_USER } from "../graphql/queries/user/searchUsers";
import { DocumentList } from "../models/DocumentList";
import { User } from "../models/User";

export default function UsersPage() {
  const { data: usersRes, loading } =
    useQuery<DocumentList<"users", User>>(SEARCH_USER);
  const columns = [
    {
      title: "Object Id",
      dataIndex: "objectId",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
    },
  ];

  const dataSource = usersRes?.users?.edges.map(({ node }) => node);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={loading}
      scroll={{ y: 600 }}
      size="middle"
    />
  );
}
