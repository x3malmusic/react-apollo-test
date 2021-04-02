import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const PlanDesc = ({ name, value }) => {
  return (
    <>
      <Typography>
        { name }
      </Typography>
      <Typography variant="h6">
        { value }
      </Typography>
      <Divider />
    </>
  )
}

export default PlanDesc