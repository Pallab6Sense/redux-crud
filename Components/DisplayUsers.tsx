import { useSelector, useDispatch } from 'react-redux';
import DeleteUser from './DeleteUser';
import { useState } from 'react';
import UpdateUser from './UpdateUser';
interface userType{
  id:string
  name: string,
  username: string
}
function DisplayUsers() {
  const userList = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState('');
  return (
    <div>
      {userList.map((user: userType) => {
        return (
          <div className="user-div" key={user.id}>
            <h1>Name:{user.name}</h1>
            <h1>User Name:{user.username}</h1>
            <DeleteUser dispatch={dispatch} id={user.id} />

            <UpdateUser
              setNewUserName={setNewUserName}
              dispatch={dispatch}
              newUserName={newUserName}
              id={user.id}
            ></UpdateUser>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayUsers;
