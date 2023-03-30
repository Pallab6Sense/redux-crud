import { addUser } from '@/Redux/Users';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const userList = useSelector((state: any) => state.users.value);

  return (
    <>
      <div className="add-name">
        <Input
          placeholder="Add Name...."
          type="text"
          prefix={<UserOutlined />}
          onChange={(event: any) => {
            setName(event.target.value);
          }}
        ></Input>
      </div>
      <div className="user-name">
        <Input
          placeholder="Add UserName...."
          type="text"
          prefix={<UserOutlined />}
          onChange={(event: any) => {
            setUserName(event.target.value);
          }}
        ></Input>
      </div>
      <div className="adduser-btn">
        <Button
          type="primary"
          shape="round"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </Button>
      </div>
    </>
  );
}
