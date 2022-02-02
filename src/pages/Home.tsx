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
import "../styles/home.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LOGOUT } from "../graphql/mutations/logout";
import HeaderPic from "../images/logowhite.png"

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
        <Header style={styles.Header}>
          <Row justify="space-between" align="middle">
            <Col> <img src={HeaderPic} alt="inspacco-logo" style={styles.headerImg} /></Col>
            <Col>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Avatar>{user?.user?.firstName?.charAt(0)}{user?.user?.lastName?.charAt(0)}</Avatar>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider collapsible width={240} >
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
                style={{fontSize:"18px"}}
              >
                <Menu.Item key="1">
                  <Link to="/users" style={styles.menuitem} >Users</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/roles" style={styles.menuitem}>Roles</Link>
                </Menu.Item>
                <Menu.Item key="3" style={styles.menuitem}>Sessions</Menu.Item>
                <Menu.Item key="4">
                  <Link to="/ViewServices" style={styles.menuitem}>Services</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/ViewSocity" style={styles.menuitem}>Society</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/ViewPartner" style={styles.menuitem}>Partner</Link>
                </Menu.Item>
              </SubMenu>
              {/* <SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="Services"
              ></SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Partners"
              ></SubMenu> */}
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
  Header: {
    
    background: "#03386A",
    
  },
  headerImg: {
    height: "50px",
    marginLeft: "-47px"
  },
  menuitem:{
    fontSize:"16px"
  }
};
