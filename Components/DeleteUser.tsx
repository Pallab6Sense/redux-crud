import { Button } from 'antd';
import { deleteUser } from '@/Redux/Users';
import { DeleteOutlined} from '@ant-design/icons';

interface propsType {
  dispatch: any;
  id: string;
}

function DeleteUser(props: propsType) {
  return (
    <div className="delete-btn">
      <Button
        type="primary"
        danger
        size="large"
        shape='round'
        icon={<DeleteOutlined />}
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
    </div>
  );
}

export default DeleteUser;
