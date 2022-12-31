import React from "react";
import Profile from "./component/Profile";

function App() {
  function Handlename() {
    alert ("ahla bik si firas")
  }
  return (
    <div>
      <Profile fullName="si firas" bio="nothing to say" profession="fs js" data ={Handlename()} >
        
<img src="/my-app/src/image/Bear.jpg" alt="ahla"  />      
        </Profile>
    </div>
  );
}

export default App;
