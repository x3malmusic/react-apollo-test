import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import { Tabs, Tab } from '../components/Tabs';
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { mainColor } from "../constants/styles";
import PlanLine from "./components/PlanLine";
import { Link } from "react-router-dom";
import PlanDesc from "./components/PlanDesc";
import { GET_OFFERS } from "../database";

const planValues = [
  { name: 'Loan amount', value: '$ 100 000' },
  { name: 'Down Payment', value: '$ 20 000' },
  { name: 'Loan team', value: '2 years' },
  { name: 'Property tax', value: '1.2% / year' },
]

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  root: {
    paddingTop: theme.spacing(10)
  },
  textCenter: {
    textAlign: 'center',
  },
  paperRoot: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  paperLeft: {
    padding: `${theme.spacing(8)}px ${theme.spacing(16)}px ${theme.spacing(8)}px ${theme.spacing(8)}px`,
    maxWidth: 650,
    width: '100%',
  },
  paperRight: {
    backgroundColor: "#faf9f5",
    textAlign: 'center',
    width: '40%',
    padding: `${theme.spacing(24)}px ${theme.spacing(8)}px`,
  },
  textMargin: {
    marginBottom: theme.spacing(6)
  },
  iconButton: {
    color: "#fff",
    backgroundColor: mainColor,
    marginRight: theme.spacing(3),
  },
  boxMargin: {
    marginBottom: theme.spacing(6),
  },
  selectWrapper: {
    flexBasis: 200,
    textAlign: 'left'
  },
  selectLabel : {
    fontSize: 14,
    opacity: 0.7
  },
  tab: {
    alignSelf: "flex-end",
    marginLeft: theme.spacing(4),
  },
  offerButton: {
    fontWeight: 'bold',
    backgroundColor: mainColor,
    padding: theme.spacing(2),
    color: '#fff'
  },
  link: {
    color: mainColor,
    textDecoration: 'none',
  },
  displayInline: {
    display: 'inline'
  }
}));

const GetPlanPage = () => {
  const classes = useStyles();
  const [getOffer, { data }] = useLazyQuery(GET_OFFERS);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.textCenter}>
        <Typography variant="h2">
          Calculate and Compare your Loans
        </Typography>
        <Typography variant="h6" className={classes.textMargin}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>

      <Paper elevation={3} className={classes.paperRoot}>
        <Paper elevation={0} className={classes.paperLeft}>
          <Box display="flex" alignItems="center" className={classes.boxMargin}>
            <Button variant="contained" className={classes.iconButton}>
              <EqualizerIcon />
            </Button>
            <Typography variant="h5">
              New Loan Application
            </Typography>
          </Box>

          <Box display="flex" className={classes.boxMargin}>
            <div className={classes.selectWrapper}>
              <Typography className={classes.selectLabel}>
                Type of Loan
              </Typography>
              <Select
                fullWidth
                native
                variant="outlined"
              >
                <option value="Standart">Standart</option>
              </Select>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tab}
            >
              <Tab label="USD"/>
              <Tab label="EUR"/>
              <Tab label="GBP"/>
            </Tabs>
          </Box>

          <Box>
            {data?.offers && data.offers[0].map(line =>
              <PlanLine
                key={line.name}
                name={line.name}
                marks={line.marks}
                label={line.label}
              />
            )}
          </Box>

          <Button
            variant="contained"
            fullWidth
            className={classes.offerButton}
            color="primary"
            onClick={getOffer}
          >
            GET REAL MORTGAGE OFFER
          </Button>
          <Typography variant="subtitle1">
            Not looking for a loan? You're a service provider?
            (bank, notary, appraiser, loan officer, etc)&nbsp;
            <Link to="/" className={classes.link}>sign up here</Link>
          </Typography>
        </Paper>

        <Paper elevation={0} className={classes.paperRight}>
          <Box className={classes.textMargin}>
            <Typography>
              Estimated Payment
            </Typography>
            <Typography className={classes.displayInline} variant="h3">
              $ 3332
            </Typography>
            <Typography className={classes.displayInline}>
              /month
            </Typography>
          </Box>

          {planValues.map(planValue => (
            <Box className={classes.textMargin} key={planValue.name}>
              <PlanDesc
                name={planValue.name}
                value={planValue.value}
              />
            </Box>
          ))}
        </Paper>
      </Paper>
    </Box>
  )
}

export default GetPlanPage