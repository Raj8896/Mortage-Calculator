import React from "react";
import { Slider, Stack, Typography } from "@mui/material";
const Sildercompomponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  lable,
  unit
}) => {
  return (
    <Stack my={1.2}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{lable} </Typography>
        <Typography variant="h5">{unit} {defaultValue} </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        marks
        onChange={onChange}
        value={value}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="caption" color={"text.secondary"}>{unit} {min} </Typography>
        <Typography variant="caption">{unit} {max} </Typography>
      </Stack>
    </Stack>
  );
};

export default Sildercompomponent;
