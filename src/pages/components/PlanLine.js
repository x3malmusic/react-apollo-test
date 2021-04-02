import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import PrettoSlider from "@material-ui/core/Slider";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import { mainColor } from "../../constants/styles";

const Slider = withStyles({
  root: {
    color: mainColor,
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
})(PrettoSlider);

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(8),
  },
  slider: {
    margin: 0
  },
  input : {
    maxWidth: 170,
    width: '100%'
  }
}));

const PlanLine = ({name, marks, label}) => {
  const classes = useStyles()
  const [value, setValue] = useState(marks[0].value);

  return (
    <Box className={classes.root}>
      <Typography>
        {name}
      </Typography>
      <Box display="flex" alignItems="center" gridGap={30}>
        <Slider
          min={marks[0].value}
          max={marks[2].value}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          step={1}
          marks={marks}
          className={classes.slider}
        />
        <OutlinedInput
          className={classes.input}
          value={value}
          onChange={e => setValue(e.target.value)}
          endAdornment={
            <InputAdornment>{label}</InputAdornment>
          }
        >
          100.000
        </OutlinedInput>
      </Box>
    </Box>
  )
}

export default PlanLine