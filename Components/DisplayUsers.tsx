import { useSelector,useDispatch } from 'react-redux';
function DisplayUsers() {
  const userList = useSelector((state: any) => state.users.value);
  return (
    <div>
      {userList.map((user: any) => {
        return (
          <div className="user-div" key={user.id}>
            <h1>Name:{user.name}</h1>
            <h1>User Name:{user.username}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayUsers;
