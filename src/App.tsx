import React from 'react';
import HomeView from './home';



function App() {

  const sign = (text:any) => {
    alert(text);

  }

  



  return (
    <div className="App">
      <HomeView alert={sign} rosa=" " />
    </div>
  );
}

export default App;
