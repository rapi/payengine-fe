import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { login } from "../../api/user";
import { setToken } from "../../utils/localStorage";
import { useState } from "react";
import { Alert } from "@mui/material";

export const SignIn = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const payload = new FormData(event.currentTarget);

    setError("");
    event.preventDefault();
    try {
      const { data } = await login({
        email: payload.get("email"),
        password: payload.get("password"),
      });
      setToken(data.token);
      navigate("/dashboard");
    } catch (e) {
      setError(e.response.data.error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          {error && (
            <Alert sx={{ mt: 2 }} severity="error">
              {error}
            </Alert>
          )}
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2">
                Already have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
