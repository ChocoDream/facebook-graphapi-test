import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


//Styled with hook API
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'black'  
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    // theme.spacing(5) Some sort of props from the templates
    padding: theme.spacing(5),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(7);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              {/* Changes the check box accordig to the click function */}
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11].map((value) => (
                  <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio/>}
                  label={value.toString()}
                />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
