import { Button } from 'antd';
import { deleteUser } from '@/Redux/Users';
interface propsType{
  dispatch:any,
  id:string
}
function DeleteUser(props: propsType) {
  return (
    <Button
      type="primary"
      danger
      size="small"
      onClick={() => {
        props.dispatch(
          deleteUser({
            id: props.id,
          })
        );
      }}
    >
      Delete User
    </Button>
  );
}

export default DeleteUser;
