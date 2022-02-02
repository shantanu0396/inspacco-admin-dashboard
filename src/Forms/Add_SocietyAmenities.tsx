import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Table } from 'antd';
import { GET_AMENITIES} from "../graphql/queries/lookup/getAmenities"
import { useLazyQuery, useQuery } from '@apollo/client';
function SocietyAmenities() {

    const [getAmenities, { data, refetch }] = useLazyQuery(GET_AMENITIES);

    const onEditHandler = () => {
        getAmenities();
      };

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record: any, selected: any, selectedRows: any) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows);
  },
};


  
  return (
    <>
      
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection }}
        dataSource={data}
      />
    </>
  );
}
export default SocietyAmenities

//ReactDOM.render(<SocietyAmenities />, document.getElementById('container'));