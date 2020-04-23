import React, { useState } from "react";
import {MuiPickersUtilsProvider,
        DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={changeDate}
      />

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </MuiPickersUtilsProvider>
    </>
  );
};

export default StaticDatePicker;
