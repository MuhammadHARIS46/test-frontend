/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from "react";
import Header from "../reusable/Header";
import Sidebar from "../reusable/Sidebar";
import { Box, Button, Typography, Modal, Fade, Backdrop } from "@mui/material";
import "./styles.css";
import AddIcon from "../../assets/Sign In.svg";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteModal from "../reusable/DeleteModal";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { CustomerService } from "../../services/customers/index.service";
import { Select, MenuItem } from "@mui/material";
import {
  setDltModal,
  setAddModal,
  setEditModal,
  setselectedUserId,
  setSidebar,
} from "../../store/modal/index";
import AddCustomer from "../reusable/AddCustomer";
import EditCustomer from "../reusable/EditCustomer";
import useMediaQuery from "@mui/material/useMediaQuery";
import NoDataSvg from "../../assets/no-results.svg";
import SampleImg from "../../assets/hispanic-young-entrepreneur-his-office-desk-working-making-packages-with-fashion-clothes-ship-their-customers (1).png";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#57BC90",
    color: theme.palette.common.white,
    whiteSpace:"nowrap"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace:"nowrap"
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Customers = () => {
  const { dltModal, addModal, editModal, sidebar } = useAppSelector(
    (state) => state.modal
  );
  const matches = useMediaQuery("(max-width:960px)");

  const dispatch = useAppDispatch();
  const customerService = useMemo(() => new CustomerService(), []);

  const [customers, setCustomers] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOrder(selectedSort === "asc" ? "asc" : "desc");
  };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };

  const getAllCustomers = async () => {
    try {
      const response = await customerService.getAllCustomers(sortBy, sortOrder);
      console.log("customers", response);
      setCustomers(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllCustomers();
  }, [dltModal, addModal, editModal, sortBy, sortOrder]);
  useEffect(() => {
    if (matches === true) {
      dispatch(setSidebar(false));
    } else {
      dispatch(setSidebar(true));
    }
  }, [matches]);
  return (
    <>
      <Box className="cusMain">
        <Sidebar isOpen={sidebar} />
        <Box className="cusContent">
          <Header />
          <Box className="wrapper">
            <Button
              className="addNewCusBtn"
              onClick={() => {
                dispatch(setAddModal(true));
              }}
              startIcon={<img src={AddIcon} alt="add" />}
            >
              Add New Customer
            </Button>
            <Box>
              <Box className="dropdownWrap">
                <Select value={sortOrder} onChange={handleSortChange} fullWidth>
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>

                <Select value={sortBy} onChange={handleSortByChange} fullWidth>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="username">Username</MenuItem>
                </Select>
              </Box>

              <Paper sx={{ width: "100%", overflow: "auto" }}>
                <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
                  <Table
                    stickyHeader
                    aria-label="customized table"
                    sx={{ minWidth: 650, width: "100%", overflowX: "auto" }}
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Username</StyledTableCell>
                        <StyledTableCell>Customer Name</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {customers?.length > 0 ? (
                        customers?.map((row) => (
                          <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                              <Box className="imgNameWrap">
                                <img
                                  src={
                                    row.imageUrl !== ""
                                      ? row.imageUrl
                                      : SampleImg
                                  }
                                  alt="SampleImg"
                                  style={{
                                    height: "75px",
                                    width: "100px",
                                  }}
                                />
                                <Typography className="username">
                                  {row.username}
                                </Typography>
                              </Box>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography className="cusName">
                                {row.name}
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography className="username">
                                {row.email}
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Box className="imgNameWrap">
                                <Button
                                  className="editBtn"
                                  onClick={() => {
                                    dispatch(setEditModal(true));
                                    dispatch(setselectedUserId(row?._id));
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="dltBtn"
                                  onClick={() => {
                                    dispatch(setDltModal(true));
                                    dispatch(setselectedUserId(row?._id));
                                  }}
                                >
                                  Delete
                                </Button>
                              </Box>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      ) : (
                        <Box className="nodataWrap">
                          <Typography className="allCusTypo">
                            All Customers will be displayed here
                          </Typography>
                          <Typography className="addFirstCus">
                            Add your first customer
                          </Typography>
                          <img src={NoDataSvg} alt="no" />
                        </Box>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        open={dltModal}
        onClose={() => dispatch(setDltModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={dltModal}>
          <Box className="Modal">
            <DeleteModal />
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={addModal}
        onClose={() => dispatch(setAddModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={addModal}>
          <Box className="Modal">
            <AddCustomer />
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={editModal}
        onClose={() => dispatch(setEditModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={editModal}>
          <Box className="Modal">
            <EditCustomer />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default Customers;
