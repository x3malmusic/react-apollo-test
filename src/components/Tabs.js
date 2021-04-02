import { withStyles } from "@material-ui/core";
import { mainColor } from "../constants/styles";
import matTabs from "@material-ui/core/Tabs";
import MatTab from "@material-ui/core/Tab";
import React from "react";

export const Tabs = withStyles({
  indicator: {
    backgroundColor: mainColor,
  },
})(matTabs);

export const Tab = withStyles((theme) => ({
  root: {
    opacity: 1,
    minWidth: 'initial',
    fontWeight: 'bold',
    '&$selected': {
      color: mainColor,
    },
  },
  selected: {},
}))((props) => <MatTab {...props} />);