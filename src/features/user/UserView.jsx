import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

function UserView() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading ...</div>}
      {!user.loading && user.error ? <div>Error {user.error} </div> : null}
      {!user.loading && user.users.map((user) => <p key={user}> {user} </p>)}
    </div>
  );
}

export default UserView;
