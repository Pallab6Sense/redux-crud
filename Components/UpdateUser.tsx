import { Button, Input } from 'antd';
import React from 'react';
import { updateUser } from '@/Redux/Users';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

interface propsType {
  id: string;
  newUserName: string;
  dispatch: any;
  setNewUserName: (newUserName: string) => void;
}

function UpdateUser(props: propsType): JSX.Element {
  return (
    <>
      <Input
        placeholder="Update User Name...."
        type="text"
        prefix={<UserOutlined />}
        onChange={(event: any) => {
          props.setNewUserName(event.target.value);
        }}
      />
      <div className="update-btn">
        <Button
          type="primary"
          shape="round"
          icon={<EditOutlined />}
          onClick={() => {
            props.dispatch(
              updateUser({
                id: props.id,
                username: props.newUserName,
              })
            );
          }}
        >
          Update Username
        </Button>
      </div>
    </>
  );
}

export default UpdateUser;
