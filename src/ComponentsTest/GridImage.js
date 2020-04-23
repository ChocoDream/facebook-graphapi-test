import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 
  const tileData = [
    {
      img: 'https://files.elle.se/uploads/2018/10/margaux-dietz-lagenhet.jpg',
      title: '1',
      author: 'author',
    },
    {
        img: 'https://www.osloguiden.se/wp-content/uploads/2015/04/Pilestredet.jpg',
        title: '2',
        author:'author'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/umMWNhIHqB7rfAveNuWHv8iyv8qKiwskXxCqpq9JPJ5gsbl9ifw9k6i5qSi7DEbjWqvL-dXtJ_nhXWzz80H8Z2ZFkQUs-IuKcFj5z2KIzNMx2w',
        title:'3',
        author:'author'
    }
  ];
 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
