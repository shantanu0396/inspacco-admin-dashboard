// import React from "react";
// import { Link } from "react-router-dom";
// import { Input, Layout, Card, Row, Col, Avatar, Descriptions } from "antd";
// import * as faIcons from "react-icons/fa";
// import { UserOutlined } from '@ant-design/icons';
// import * as mdIcons from "react-icons/md";
// import * as grIcons from "react-icons/gr";
// const { Header, Content, Footer, Sider } = Layout;
// const { Meta } = Card
// export
//     function Edit_socityData() {
//     return (
//         <Layout style={{  }}>
//             <Content>
//                 <Header className='homeHeader'>
//                     <div className="detail_header">
//                         <Link to='/Add_socity' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
//                         <span className="service_title">Socity Name</span>
//                     </div>
//                 </Header>
//                 <div className="basicInfo">
//                     <Card
//                         hoverable
//                         className="infoCard" >
//                         <span>
//                             <p className="detailHeading" >Basic Information <Link to="/Add_servicesdetails"><faIcons.FaEdit className="faicon" /> </Link></p>

//                         </span>
//                         <div className="servicedetails">
//                             <p className="servicetitle">Name</p>
//                             <p className="fieldcontaint">Socity Name</p>

//                             <p className="servicetitle">Area</p>
//                             <p className="fieldcontaint" >area</p>

//                             <p className="servicetitle">City</p>
//                             <p className="fieldcontaint" >city</p>

//                             <p className="servicetitle">Address</p>
//                             <p className="fieldcontaint" >address</p>
//                         </div>
//                     </Card>
//                 </div>

//                 <div className="basicInfo">
//                     <Card
//                         hoverable
//                         className="infoCard" >
//                         <span>
//                             <p className="detailHeading">Socity Members <Link to="/Add_socityMember"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
//                         </span>
//                         <div className="servicedetails">
//                             <p className="servicetitle">  <Avatar icon={<UserOutlined />} className="avtarIcons" />Name</p>
//                             <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
//                         </div>
//                     </Card>
//                 </div>

//                 <div className="basicInfo">
//                     <Card
//                         hoverable
//                         className="infoCard" >
//                         <span>
//                             <p className="detailHeading">Key Account Manager <Link to="/Kam"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
//                         </span>
//                         <div className="servicedetails">
//                             <p className="servicetitle">  <Avatar icon={<UserOutlined />} className="avtarIcons" />Name</p>
//                             <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
//                         </div>
//                     </Card>
//                 </div>

//                 <div className="basicInfo">
//                     <Card
//                         hoverable
//                         className="infoCard" >
//                         <span>
//                             <p className="detailHeading">Amenities <Link to="/Add_tasks"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
//                         </span>
//                         <div className="servicedetails">
//                             <p className="servicetitle">Name</p>
//                             <p className="fieldcontaint">Accounts</p>
//                         </div>
//                     </Card>
//                 </div>

//                 <div className="basicInfo">
//                     <Card
//                         hoverable
//                         className="infoCard" >
//                         <span>
//                             <p className="detailHeading">Services <Link to="/Add_sosService"> <mdIcons.MdOutlineAddCircleOutline className="faicon" /></Link></p>
//                         </span>
//                         <div className="servicedetails">
//                             <p className="servicetitle">  <Avatar icon={<grIcons.GrServices />} className="avtarIcons" />Name</p>
//                             <p className="fieldcontaint" style={{ marginLeft: "53px",marginTop:"-25px" }}>Accounts</p>
//                         </div>
//                     </Card>
//                 </div>
//             </Content>
//         </Layout>
//     )
// }
// export default Edit_socityData;


import React from "react";
import { Link } from "react-router-dom";
import { Input, Layout, Card, Row, Col, Avatar, Table, Descriptions, Collapse } from "antd";
import * as fiIcons from "react-icons/fi";
import * as biIcons from "react-icons/bi"
import { UserOutlined } from '@ant-design/icons';
import * as mdIcons from "react-icons/md";
import * as grIcons from "react-icons/gr";
import "../styles/Editsociety.css";
// import Table from 'react-bootstrap/Table';

const { Panel } = Collapse;
const { Header, Content, Footer, Sider } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Member Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Action',
        dataIndex: 'address',
        key: 'address',
    }];

const data = [
    {
        key: '1',
        name: 'John Brown',
        type: 'Society Admin',
        address: 'New York No. 1 Lake Park',

    },
    {
        key: '2',
        name: 'Jim Green',
        type: "Society Admin",
        address: 'London No. 1 Lake Park',

    },

];
const columnsforkem = [
    {
        title: 'Person',
        dataIndex: 'person',
        key: 'person',

    },
    {
        title: 'Sub Type',
        dataIndex: 'subtype',
        key: 'subtype',
    },
    {
        title: 'Action',
        dataIndex: 'actions',
        key: 'actions',
    }];

const dataforkem = [
    {
        key: '1',
        person: 'John Brown',
        subtype: 'Key Account Manager',
        address: 'New York No. 1 Lake Park',

    },
    {
        key: '2',
        person: 'Jim Green',
        subtype: "Society Admin",
        address: 'London No. 1 Lake Park',

    },

];
const columnsservice = [
    {
        title: 'Service Name',
        dataIndex: 'sname',
        key: 'sname',

    },
    {
        title: 'Person',
        dataIndex: 'servicePerson',
        key: 'servicePerson',
    },
    {
        title: 'Action',
        dataIndex: 'actions',
        key: 'actions',
    }];

const dataservice = [
    {
        key: '1',
        sname: 'John Brown',
        servicePerson: 'Ajay Inspacco',
        address: 'New York No. 1 Lake Park',

    },
    {
        key: '2',
        sname: 'Jim Green',
        servicePerson: "Akshay Inspacco",
        address: 'London No. 1 Lake Park',

    },

];

const { Meta } = Card
export
    function Edit_socityData() {



    return (
        <Layout style={{}}>
            <Content>
                <Link to='/ViewSocity'><biIcons.BiArrowBack height="35px" width="35px"
                    style={{
                        border: "2px solid #0493cd",
                        height: "35px",
                        width: "35px",
                        borderRadius: "50%",
                        color: "black",
                        marginTop: "10px",
                        marginLeft: "10px"
                    }} /></Link>
                {/* <Header className='homeHeader'>
                    <div className="detail_header">
                       
                    </div>
                </Header> */}
                <Collapse accordion className="mt-5" style={{marginTop:"20px"}}
                // onChange={callback} 
                >
                    <Panel header="Basic Information" style={{fontSize:"18px"}} key="1">
                        <div className="basicInfo">
                            <Card
                                hoverable
                                className="infoCard" >
                                <span>
                                    <p className="detailHeading"  >Basic Information <Link to="/Add_servicesdetails"><fiIcons.FiEdit className="faicon" style={{float:"right"}} width="20px" height="20px" /> </Link></p>

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
                    </Panel>
                </Collapse>
                <Collapse accordion className="mt-4" style={{marginTop:"20px"}}
                // onChange={callback} 
                >
                    <Panel header="Society Member" style={{fontSize:"18px"}} key="1">
                        <div className="basicInfo">
                            <Card
                                hoverable
                                className="infoCard " >
                                <span>
                                    <p className="detailHeading">Society Members <Link to="/Add_socityMember"> <mdIcons.MdOutlineAddCircleOutline className="faicon-plus" /></Link></p>
                                </span>
                                <div className="servicedetails">
                                    {/* <Table striped borderless hover size="sm">
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Last </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                   
                                </tbody>
                            </Table> */}


                                    <Table columns={columns} dataSource={data} />


                                </div>
                            </Card>
                        </div>
                    </Panel>
                </Collapse>
                <Collapse accordion className="mt-4" style={{marginTop:"20px"}}
                // onChange={callback} 
                >
                    <Panel header="Key Account Manager" style={{fontSize:"18px"}} key="1">
                        <div className="basicInfo">
                            <Card
                                hoverable
                                className="infoCard mt-4" >
                                <span>
                                    <p className="detailHeading">Key Account Manager <Link to="/Kam"> <mdIcons.MdOutlineAddCircleOutline className="faicon-plus" /></Link></p>
                                </span>
                                <div className="servicedetails">
                                    <Table columns={columnsforkem} dataSource={dataforkem} />
                                </div>
                            </Card>
                        </div>
                    </Panel>
                </Collapse>

                <Collapse accordion className="mt-4" style={{marginTop:"20px"}}
                // onChange={callback} 
                >
                    <Panel header="Amenities" style={{fontSize:"18px"}} key="1">
                        <div className="basicInfo">
                            <Card
                                hoverable
                                className="infoCard mt-4" >
                                <span>
                                    <p className="detailHeading">Amenities <Link to="/SocietyAmenities"> <mdIcons.MdOutlineAddCircleOutline className="faicon-plus" /></Link></p>
                                </span>
                                <div className="servicedetails">
                                    <p className="servicetitle">Name</p>
                                    <p className="fieldcontaint">Accounts</p>
                                </div>
                            </Card>
                        </div>
                    </Panel>
                </Collapse>
                <Collapse accordion className="mt-4" style={{marginTop:"20px"}}
                // onChange={callback} 
                >
                    <Panel header="Services" style={{fontSize:"18px"}} key="1">
                        <div className="basicInfo">
                            <Card
                                hoverable
                                className="infoCard mt-4" >
                                <span>
                                    <p className="detailHeading">Services <Link to="/Add_sosService"> <mdIcons.MdOutlineAddCircleOutline className="faicon-plus" /></Link></p>
                                </span>
                                <div className="servicedetails">
                                    <Table columns={columnsservice} dataSource={dataservice} />
                                </div>
                            </Card>
                        </div>
                    </Panel>
                </Collapse>
            </Content>
        </Layout >
    )
}
export default Edit_socityData;