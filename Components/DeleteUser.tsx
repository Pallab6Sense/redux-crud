import { Button } from 'antd';
import { deleteUser } from '@/Redux/Users';
function DeleteUser(props: any) {
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
