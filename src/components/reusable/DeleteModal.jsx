import React, { useMemo } from "react";
import DeleteIcon from "../../assets/delete.svg";
import { Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { setDltModal } from "../../store/modal/index";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { CustomerService } from "../../services/customers/index.service";
import { useSnackbar } from "notistack";
const DeleteModal = () => {
  const { selectedUserId } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();
  const customerService = useMemo(() => new CustomerService(), []);
  const { enqueueSnackbar } = useSnackbar();

  const deleteCustomer = async () => {
    try {
      const response = await customerService.deleteCustomer(selectedUserId);
      enqueueSnackbar("Customer deleted successfully", {
        variant: "success",
        autoHideDuration: 2000,
      });
      dispatch(setDltModal(false));
      return response
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box className="dltModalMain">
      <Box className="closeBtn">
        <IconButton
          onClick={() => {
            dispatch(setDltModal(false));
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className="dltModalContentWrap">
        <img
          src={DeleteIcon}
          alt="dlt"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          Are you sure?
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
          }}
        >
          Do you really want to delete this customer?
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
          }}
        >
          This process can not be undone.
        </Typography>
        <Box className="buttonsWrap">
          <Button
            variant="contained"
            sx={{
              background: "#A5A5AF",
            }}
            onClick={() => {
              dispatch(setDltModal(false));
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={deleteCustomer}>
            {" "}
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteModal;
