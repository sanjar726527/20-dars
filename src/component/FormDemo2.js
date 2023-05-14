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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo2 = () => {
  const [event, setEvent] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const resetAll = () => {
    reset();
  };

  return (
    <Box maxWidth={"sm"}>
      <Typography component="h2" variant="h5">
        Form Demo
      </Typography>
      <Box onSubmit={handleSubmit(submit)} component="form">
        <Grid container spacing={2} sx={{ py: 3 }}>
          <Grid item xs={12}>
            <TextField
              label="Text input"
              variant="outlined"
              fullWidth
              type="text"
              {...register("textInput", { required: true, minLength: 6 })}
              error={errors.textInput}
            />
            {errors.textInput && (
              <Typography color="error">Text Input to'dirilmagan</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Radio Input
              </FormLabel>
              <RadioGroup
                name="controlled-radio-buttons-group"
                {...register("radioInput", { required: true })}
                error={errors.radioInput}
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
                {errors.radioInput && (
                  <Typography color="error">Radio Input tanlanmagan</Typography>
                )}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Dropdown Input
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
                {...register("dropdown", { required: true })}
                error={errors.dropdown}
              >
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
            <FormControlLabel
              control={<Checkbox />}
              label="CheckBox option 1"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="CheckBox option 2"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel variant="standard" sx={{ pb: 1 }}>
              Slider input
            </InputLabel>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              {...register("slider", { required: true })}
              error={errors.slider}
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
        <Button
          variant="contained"
          fullWidth
          color="inherit"
          onClick={resetAll}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};
