import React from "react";
import Clock1 from "./components/Clock1/Clock1";
import Clock2 from "./components/Clock2/Clock2";
import Props from "./components/props/Props";
// import Hello from "./components/hello/Hello"
// import Jsx from "./components/jsx/Jsx";
// import ExternalStyle from "./components/style/ExternalStyle";
// import InlineStyle from "./components/style/InlineStyle";
// import InternalStyle from "./components/style/InternalStyle";
// import Test from "./components/test/Test";
function App() {
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
*/}
<Clock2 textColor="yellow" backgrounColor="navy" />
    </div>
  );
}

export default App;
