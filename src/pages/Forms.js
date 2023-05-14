import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const Forms = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography component={"h2"} variant="h2" sx={{ my: 2 }}>
        Forms
      </Typography>
      <Box component="form" onSubmit={handleSubmit(submit)}>
        <Grid container spacing={2} sx={{ pb: 3 }}>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="name"
              variant="outlined"
              fullWidth
              type="text"
              {...register("fullName")}
            />
          </Grid>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="email"
              variant="outlined"
              fullWidth
              type="email"
              {...register("email")}
            />
          </Grid>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="number"
              variant="outlined"
              type="text"
              fullWidth
              {...register("phone")}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </Box>
  );
};
