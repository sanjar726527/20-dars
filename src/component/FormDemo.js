import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  NativeSelect,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const FormDemo = () => {
  const [name, setName] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [value, setValue] = useState("");
  const [event, setEvent] = useState(null);

  const sendForms = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrorName(true);
      return;
    } else setErrorName(false);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box component="form" onSubmit={sendForms} maxWidth={"sm"}>
      <Typography component="h2" variant="h5">
        Form Demo
      </Typography>
      <Grid container spacing={2} sx={{ py: 3 }} alignItems={"center"}>
        <Grid item xs={12}>
          <TextField
            label="Text input"
            variant="outlined"
            fullWidth
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            error={errorName}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Radio Input
            </FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="input1"
                control={<Radio />}
                label="Radio Option 1"
              />
              <FormControlLabel
                value="input2"
                control={<Radio />}
                label="Radio Option 2"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Dropdown Input
            </InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={0}></option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} xl={12} lg={12}>
          <InputLabel variant="filled" sx={{ pb: 1 }}>
            Data input
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={event}
                onChange={(newValue) => setEvent(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <InputLabel variant="standard" sx={{ pb: 1 }}>
            CheckBox input
          </InputLabel>
          <FormControlLabel control={<Checkbox />} label="CheckBox option 1" />
          <FormControlLabel control={<Checkbox />} label="CheckBox option 2" />
        </Grid>
        <Grid item xs={12}>
          <InputLabel variant="standard" sx={{ pb: 1 }}>
            Slider input
          </InputLabel>
          <Slider
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        fullWidth
        color="inherit"
        type="submit"
        sx={{ my: 2 }}
      >
        Submit
      </Button>
      <Button variant="contained" fullWidth color="inherit" type="submit">
        Reset
      </Button>
    </Box>
  );
};
