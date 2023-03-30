import { Button, Input } from 'antd';
import React from 'react';
import { updateUser } from '@/Redux/Users';
interface propsType{
    id: string,
    newUserName: string,
    dispatch:any,
    setNewUserName:(newUserName:string)=>void
}
function UpdateUser(props: propsType) {
  return (
    <>
      <Input
        placeholder="Update User Name...."
        type="text"
        onChange={(event: any) => {
          props.setNewUserName(event.target.value);
        }}
      />
      <Button
        type="primary"
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
    </>
  );
}

export default UpdateUser;
