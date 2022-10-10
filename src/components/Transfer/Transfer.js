import TextField from "@mui/material/TextField";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { useCallback, useState } from "react";
import { createTransaction } from "../../api/transactions";
import { useNavigate } from "react-router-dom";

export const Transfer = () => {
  const [amount, setAmount] = useState(10);
  const [currency, setCurrency] = useState("USD");
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();
  const submit = useCallback(async () => {
    const {
      data: { data },
    } = await createTransaction({ amount, currency });

    const tab = window.open(data.paymentLinkUrl, "", "width=700,height=500");
    clearInterval(timer);
    const newTimer = setInterval(() => {
      if (tab.closed) {
        clearInterval(newTimer);
        navigate("/dashboard/transaction-list");
      }
    }, 1000);
    setTimer(newTimer);
  });

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box flex sx={{ mx: "auto" }}>
        <TextField
          required
          label="Amount"
          value={amount}
          onChange={({ target: { value } }) => setAmount(Number(value))}
          type="number"
          inputProps={{ min: 10, max: 100000 }}
          sx={{ width: "70%" }}
        />
        <FormControl sx={{ ml: 1, width: "27%" }}>
          <InputLabel id="currency-select-label">Currency</InputLabel>
          <Select
            value={currency}
            label="Currency"
            labelId="currency-select-label"
            onChange={({ target: { value } }) => setCurrency(value)}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ my: 1 }}
          onClick={submit}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};
