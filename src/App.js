import React from 'react';
import Navigation from './Components/Navigation'
import SideTab from './Components/SideTab'
import ListPost from './Components/ListPost'
import ListPic from './Components/ListPic'
import { Grid, makeStyles, List, ListItem } from '@material-ui/core'

const useStyle = makeStyles({
  root:{
    flexGrow:1
  },
})

function App() {
  const classes = useStyle()
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
