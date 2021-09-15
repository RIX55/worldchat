import React from 'react';
import { SideBar } from "./components/SideBar/SideBar.component";
import Messages from "./components/Messages/Messages.component"

import './App.css';
import { Grid } from 'semantic-ui-react';

function App() {
  return (<div style={{backgroundColor: '#29132e'}}>
    <Grid columns="equal">
      <SideBar />
      <Grid.Column className="messagepanel">
        <Messages />
      </Grid.Column>

      <Grid.Column width={100}>
        <span >

        </span>
      </Grid.Column>
    </Grid>
    <div style={{marginLeft: "80px", backgroundColor:"#rgba(0,0,0,.87)", color :"white", height: " 80px"}}>
        <h1 style={{marginLeft:"700px"}}>ADSENSE</h1>
    </div>
    </div>
  );
}

export default App;
