import React from "react";
import BSCClassic from "./components/bootstrap-classic/BSCClassic";
import BSReact from "./components/bootstrap-react/BSReact";
import Clock1 from "./components/Clock1/Clock1";
import Clock2 from "./components/Clock2/Clock2";
import Counter from "./components/counter/Counter";
import Image from "./components/image/Image";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
// import Hello from "./components/hello/Hello"
// import Jsx from "./components/jsx/Jsx";
// import ExternalStyle from "./components/style/ExternalStyle";
// import InlineStyle from "./components/style/InlineStyle";
// import InternalStyle from "./components/style/InternalStyle";
// import Test from "./components/test/Test";
function App() {
  const avatar =
    "https://images.unsplash.com/photo-1633156583772-3c3ccee99b91?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";
  return (
    <div>
      {/* 
     Merhaba Dunya(app)
    
     <Hello/>
     <Test />
     <Jsx/>
     <InlineStyle/>
     <InternalStyle/>
     <ExternalStyle/>
     
     <Clock1/>
     
     <Props ad="Merve"  soyad="Kaplan"/>
     <Props ad="Ali"  soyad="Kara"/>
     <Props ad="Ayse"  soyad="Pembe"/>
     <Props ad="Hakan"  soyad="Mavi"/>

<Clock2 textColor="yellow" backgroundColor="navy" />
<Clock2 textColor="white" backgroundColor="black" />
<Clock2 textColor="yellow" backgroundColor="red" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Profile
          avatar={avatar}
          name="Ali Gel"
          location="Turkiye, Ist"
          shot="4"
          followers="25"
          following="45"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixid=MnwxMjA3fDB8MHxwaG90by1[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
          name="Mehmet Gel"
          location="Turkiye, Ist"
          shot="34"
          followers="625"
          following="245"
        />
        
      <Image />
      
      <BSCClassic />
      
      <BSReact />
     
      <Shop />
       
      <State />
      */}
      <Counter />
    </div>
  );
}

export default App;
