import React from "react";
import { Link } from "react-router-dom";
import { Input, Layout, Card, Row, Col, Avatar, Descriptions } from "antd";
import * as faIcons from "react-icons/fa";
import { UserOutlined } from '@ant-design/icons';
import * as mdIcons from "react-icons/md";
import * as grIcons from "react-icons/gr";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card
export
    function Edit_socityData() {
    return (
        <Layout style={{  }}>
            <Content>
                <Header className='homeHeader'>
                    <div className="detail_header">
                        <Link to='/Add_socity' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
                        <span className="service_title">Socity Name</span>
                    </div>
                </Header>
                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                            <p className="detailHeading" >Basic Information <Link to="/Add_servicesdetails"><faIcons.FaEdit className="faicon" /> </Link></p>

                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">Name</p>
                            <p className="fieldcontaint">Socity Name</p>

                            <p className="servicetitle">Area</p>
                            <p className="fieldcontaint" >area</p>

                            <p className="servicetitle">City</p>
                            <p className="fieldcontaint" >city</p>

                            <p className="servicetitle">Address</p>
                            <p className="fieldcontaint" >address</p>
                        </div>
                    </Card>
                </div>

                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                            <p className="detailHeading">Socity Members <Link to="/Add_socityMember"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">  <Avatar icon={<UserOutlined />} className="avtarIcons" />Name</p>
                            <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
                        </div>
                    </Card>
                </div>

                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                            <p className="detailHeading">Key Account Manager <Link to="/Kam"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">  <Avatar icon={<UserOutlined />} className="avtarIcons" />Name</p>
                            <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
                        </div>
                    </Card>
                </div>

                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                            <p className="detailHeading">Amenities <Link to="/Add_tasks"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">Name</p>
                            <p className="fieldcontaint">Accounts</p>
                        </div>
                    </Card>
                </div>

                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                            <p className="detailHeading">Services <Link to="/Add_sosService"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">  <Avatar icon={<grIcons.GrServices />} className="avtarIcons" />Name</p>
                            <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
                        </div>
                    </Card>
                </div>
            </Content>
        </Layout>
    )
}
export default Edit_socityData;