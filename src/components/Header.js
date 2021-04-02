import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { mainColor } from "../constants/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(12),
    backgroundColor: mainColor,
  },
  button: {
    borderRadius: 0,
    color: '#fff',
    borderColor: '#fff',
    marginRight: theme.spacing(5),
    padding: '5px 30px'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          LoanAid.AI
        </Typography>
      </Toolbar>
      <Toolbar>
        <Button variant="outlined" className={classes.button}>LOGIN</Button>
        <LanguageIcon className={classes.icon}/>
        <Typography>
          EN
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header