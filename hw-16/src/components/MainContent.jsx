import { Button, Typography, Container, Paper } from "@mui/material";
import React from "react";

const MainContent = ({ handleClickOpen }) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Paper sx={{ padding: 5 }} elevation={4}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#0c2c83", fontWeight: 600, mb: 3 }}
        >
          Добро пожаловать!
        </Typography>

        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: "#0050d0",
            color: "#fff",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#003b99" },
          }}
        >
          Открыть диалог
        </Button>
      </Paper>
    </Container>
  );
};

export default MainContent;
