import TextField from "@mui/material/TextField";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Transfer = () => {
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
        <TextField required label="Amount" defaultValue="10" type="number" />
        <FormControl sx={{ ml: 1 }}>
          <InputLabel id="currency-select-label">Age</InputLabel>
          <Select value="USD" label="Currency" labelId="currency-select-label">
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
