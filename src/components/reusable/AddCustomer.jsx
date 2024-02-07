import { Box, Typography, IconButton, Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import React, { useState, useMemo } from "react";
import { useAppDispatch } from "../../store/index";
import { setAddModal } from "../../store/modal";
import { CustomerService } from "../../services/customers/index.service";
import { useSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
const AddCustomer = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const customerService = useMemo(() => new CustomerService(), []);
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  const handleImageChange = (event) => {
    event.preventDefault()
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleAddCustomer = async () => {
    console.log("data", data, selectedImage);
    setLoading(true);
    const { email, name, username } = data;
    if (!email || !name || !username) {
      enqueueSnackbar("Please fill in all fields", {
        variant: "error",
        autoHideDuration: 2000,
      });
      setLoading(false);
      dispatch(setAddModal(false))
      return;
    }
    try {
      const newForm = new FormData();
      newForm.append('name',data.name)
      newForm.append('username',data.username)
      newForm.append('email',data.email)
      newForm.append('image',selectedImage)
      const response = await customerService.createCustomer(newForm);
      if (response.status === 200) {
        enqueueSnackbar("Customer created successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      }
    } catch (err) {
      enqueueSnackbar("An error occurred", {
        variant: "error",
        autoHideDuration: 2000,
      });
      console.log(err);
    } finally {
      setLoading(false);
      dispatch(setAddModal(false))
    }
  };
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
          name="username"
          value={data.username}
          onChange={onChange}
        />
        <TextField
          id="outlined-password-input"
          placeholder="Customer name"
          sx={{ width: "100%" }}
          name="name"
          onChange={onChange}
        />
        <TextField
          id="outlined-password-input"
          placeholder="Email"
          sx={{ width: "100%" }}
          name="email"
          onChange={onChange}
        />
        <div>
          <label htmlFor="upload-input">
            <Typography
              component="span"
              sx={{
                color: "#57BC90",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Upload photo
            </Typography>
          </label>
          <input
            type="file"
            id="upload-input"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {selectedImage && <p>Selected Image: {selectedImage.name}</p>}
        </div>

        <Button
          style={{
            background: "linear-gradient(105deg, #57BC90, #004B40)",
            color: "white",
            textTransform: "capitalize",
          }}
          onClick={handleAddCustomer}
        >
          {loading === false ? (
            "Add new customer"
          ) : (
            <CircularProgress size={20} color="inherit" />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default AddCustomer;
