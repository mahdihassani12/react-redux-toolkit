import React from "react";
import CakeView from "../features/cake/CakeView";
import IcecreamView from "../features/icecream/IcecreamView";
import UserView from "../features/user/UserView";

function Home() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default Home;
