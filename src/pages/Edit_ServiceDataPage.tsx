import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Layout, Card, Row, Col, Avatar, Descriptions } from "antd";
import * as faIcons from "react-icons/fa";
import { SearchOutlined, PlusOutlined, AntDesignOutlined, HomeOutlined } from '@ant-design/icons';
import * as mdIcons from "react-icons/md";
import { GET_SERVICE_BY_ID } from "../graphql/queries/service/getService";
import { useQuery } from "@apollo/client";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card
export
    function Edit_serviceData(navigation: any,route: { params: { id: any; }; }) {
        const {
            refetch: getService,
            data: serviceResponse,
            loading: serviceLoading,
          } = useQuery(GET_SERVICE_BY_ID, {
            fetchPolicy: 'network-only',
            variables: { id: route.params.id },
          });

          useEffect(() => {
            navigation.setOptions({
              headerTitle: serviceResponse?.service?.name,
            });
          }, [serviceResponse?.service]);
          
    return (
        <Layout style={{ marginTop: "-48%" }}>
            <Content>
                <Header className='homeHeader'>
                    <div className="detail_header">
                        <Link to='/Add_services' ><faIcons.FaArrowLeft style={{ marginLeft: "15%", fontSize: "20px" }} /></Link>
                        <span className="service_title">Accountant</span>
                    </div>
                </Header>
                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                        <p className="detailHeading" >Basic Information <Link to="/Add_servicesdetails"><faIcons.FaEdit className="faicon"/> </Link></p>
                        
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">Name</p>
                            <p className="fieldcontaint">Accounts</p>

                            <p className="servicetitle">Description</p>
                            <p className="fieldcontaint" >Accounts</p>

                            <p className="servicetitle">Attendance Required</p>
                            <p className="fieldcontaint" >Yes</p>
                        </div>
                    </Card>
                </div>

                <div className="basicInfo">
                    <Card
                        hoverable
                        className="infoCard" >
                        <span>
                        <p className="detailHeading">Tasks <Link to="/Add_tasks"> <mdIcons.MdOutlineAddCircleOutline className="faicon"/></Link></p>
                        </span>
                        <div className="servicedetails">
                            <p className="servicetitle">Name</p>
                            <p className="fieldcontaint">Accounts</p>
                        </div>
                    </Card>
                </div>
            </Content>
        </Layout>
    )
}
export default Edit_serviceData;