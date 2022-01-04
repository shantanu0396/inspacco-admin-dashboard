import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Avatar, Col, Dropdown, Layout, Menu, Row } from "antd";
import { compact } from "lodash";
import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LOGOUT } from "../graphql/mutations/logout";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function Home() {
  const { user, clear } = useContext(AuthContext);
  const [logout, { data }] = useMutation(LOGOUT);
  const navigate = useNavigate();

  async function signOut() {
    await logout();
    localStorage.removeItem("currentUser");
    clear();
  }
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined color="#ff00ff" />}>
        {compact([user?.user?.firstName, user?.user?.lastName]).join(" ")}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<LogoutOutlined />} onClick={signOut}>
        Sign out
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Layout style={styles.wrapper}>
        <Header>
          <Row justify="space-between" align="middle">
            <Col>Logo</Col>
            <Col>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Avatar>{user?.user?.firstName?.charAt(0)}</Avatar>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider collapsible width={300}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                icon={<UserOutlined />}
                title="User Management"
              >
                <Menu.Item key="1">
                  <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/roles">Roles</Link>
                </Menu.Item>
                <Menu.Item key="3">Sessions</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="Services"
              ></SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Partners"
              ></SubMenu>
            </Menu>
          </Sider>
          <Content style={styles.content}>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
  },
  content: {
    padding: "20px",
  },
};
