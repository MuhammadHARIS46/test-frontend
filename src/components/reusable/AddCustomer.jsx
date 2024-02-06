import { Box, Typography, IconButton, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import React from "react";
import { useAppDispatch } from "../../store/index";
import { setAddModal } from "../../store/modal";

const AddCustomer = ({ onClose }) => {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Box className="addCusModalhead">
        <Box className="closeBtn">
          <IconButton
            onClick={() => {
              dispatch(setAddModal(false));
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Typography
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "35px",
            fontWeight: 700,
          }}
        >
          Add New Customer
        </Typography>
      </Box>
      <Box
        className="cusModalContentWrap"
        sx={{
          background: "#FBFCFC",
          padding: "30px",
        }}
      >
        <TextField
          id="outlined-password-input"
          placeholder="username"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-password-input"
          placeholder="Customer name"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-password-input"
          placeholder="Email"
          sx={{ width: "100%" }}
        />
        <Typography
          sx={{
            color: "#57BC90",
            fontSize: "18px",
          }}
        >
          Upload photo
        </Typography>
        <Button
          style={{
            background: "linear-gradient(105deg, #57BC90, #004B40)",
            color: "white",
            textTransform: "capitalize",
          }}
          onClick={()=>{
            dispatch(setAddModal(false))
          }}
        >
          Add new customer
        </Button>
      </Box>
    </Box>
  );
};

export default AddCustomer;
