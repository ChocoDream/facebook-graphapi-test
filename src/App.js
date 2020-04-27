import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core'

import Navigation from './Components/Navigation'
import SideTab from './Components/SideTab'
import ListPost from './Components/ListPost'
import ListPic from './Components/ListPic'
import FacebookInformation from './Components/FacebookInformation'

import {FacebookUserProvider} from './Contexts/FacebookUserProvider'

const useStyle = makeStyles({
  root:{
    flexGrow:1
  },
})

function App() {

  const classes = useStyle()
  return (
    <div className="App">
      <FacebookUserProvider>

      <Navigation/>
      <div className={classes.root}>
        <Grid container>
          <Grid container item xs={10} >
            <SideTab/>
          </Grid>
          <Grid container item xs={2} >
            <ListPost/>
          </Grid>
          <Grid container item xs={10} >
            <Grid item >
              <ListPic/>
            </Grid>
          </Grid>
        </Grid>
      </div>
        <p>Facebook stuff</p>
        <FacebookInformation />

      </FacebookUserProvider>
    </div>
  );
}

export default App;
