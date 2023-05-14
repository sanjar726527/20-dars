import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
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
  const clearAll = () => {
    reset();
  };
  return (
    <Box maxWidth={"md"} margin={"auto"}>
      <Typography component="h2" variant="h3">
        Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
        maxWidth={"sm"}
        margin={"auto"}
      >
        <Grid container spacing={2} sx={{ py: 3 }}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="standard"
              fullWidth
              type="text"
              {...register("firstName", {
                required: "FirstName is not entered",
                minLength: {
                  value: 5,
                  message: "FirstName is not entered full",
                },
              })}
              error={errors.firstName}
            />
            {errors.firstName && (
              <Typography color="error">{errors.firstName.message}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="standard"
              fullWidth
              type="text"
              {...register("lastName", {
                required: "LastName is not entered",
                minLength: {
                  value: 5,
                  message: "LastName is not entered full",
                },
              })}
              error={errors.lastName}
            />
            {errors.lastName && (
              <Typography color="error">{errors.lastName.message}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="standard"
              fullWidth
              type="email"
              {...register("email", {
                required: "Email is not entered",
                minLength: {
                  value: 5,
                  message: "Email is not entered full",
                },
              })}
              error={errors.email}
            />
            {errors.email && (
              <Typography color="error">{errors.email.message}</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <RadioGroup name="controlled-radio-buttons-group">
                <FormControlLabel
                  value="input1"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="input2"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="input3"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                id="demo-simple-select-standard"
                label="Age"
                defaultValue={0}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Employed" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Notes"
              variant="standard"
              fullWidth
              type="text"
              {...register("notes", {
                required: "Notes is not entered",
              })}
              error={errors.notes}
            />
            {errors.notes && (
              <Typography color="error">{errors.notes.message}</Typography>
            )}
          </Grid>
        </Grid>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          type="submit"
          sx={{ ml: 20, mr: 2, width: "max-content" }}
          startIcon={<TelegramIcon color="white" />}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="inherit"
          sx={{ width: "max-content" }}
          onClick={clearAll}
        >
          Clear Values
        </Button>
      </Box>
    </Box>
  );
};
