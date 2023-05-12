import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(998);

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);

  

  const sendForms = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrorName(true);
      return;
    } else setErrorName(false);
    if (email.trim() === "") {
      setErrorEmail(true);
      return;
    } else setErrorEmail(false);
    if (number.trim() === "") {
      setErrorNumber(true);
      return;
    } else setErrorNumber(false);
    console.log(name, email, number);
  };
  return (
    <Box sx={{ py: 3 }}>
      <Typography component={"h2"} variant="h2" sx={{ my: 2 }}>
        Forms
      </Typography>
      <Box component="form" onSubmit={sendForms}>
        <Grid container spacing={2} sx={{ pb: 3 }}>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="name"
              variant="outlined"
              fullWidth
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              error={errorName}
            />
          </Grid>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="email"
              variant="outlined"
              fullWidth
              value={email}
              error={errorEmail}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={4} item>
            <TextField
              label="number"
              variant="outlined"
              type="number"
              fullWidth
              value={number}
              error={errorNumber}
              onChange={(e) => setNumber(e.target.value)}
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
