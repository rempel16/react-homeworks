import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const DialogBox = ({ open, handleClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    handleClose();
    setInputValue("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ color: "#0050d0", fontWeight: 600 }}>
        Введите данные
      </DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ color: "#0c2c83", mb: 2 }}>
          Пожалуйста введите ваше сообщение
        </DialogContentText>

        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ваше сообщение"
          fullWidth
          variant="outlined"
          autoFocus
          margin="dense"
          sx={{
            "& input": { color: "#2d2d2d" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#7eb3dc" },
              "&:hover fieldset": { borderColor: "#6c9fcf" },
              "&.Mui-focused fieldset": { borderColor: "#0050d0" },
            },
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{ color: "#0050d0", fontWeight: 600 }}
        >
          Отмена
        </Button>

        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            backgroundColor: "#0080ff",
            color: "#fff",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#0065cc",
            },
          }}
        >
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
