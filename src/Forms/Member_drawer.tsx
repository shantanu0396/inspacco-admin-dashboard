import React, { useState } from 'react';
import { Drawer, Button, Space, Input } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
const Member_drawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('bottom');
  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Space>
        <Input type="primary" onClick={showDrawer}>
          Person
        </Input>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Member_drawer