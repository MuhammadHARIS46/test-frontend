import React from "react";
import Header from "../reusable/Header";
import Sidebar from "../reusable/Sidebar";
import { Box, Button, Typography, Modal, Fade, Backdrop } from "@mui/material";
// IconButton,useTheme,
//   TableFooter,
//   TablePagination,
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
import {
  setDltModal,
  setAddModal,
  setEditModal,
} from "../../store/modal/index";
import AddCustomer from "../reusable/AddCustomer";
import EditCustomer from "../reusable/EditCustomer";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SampleImg from "../../assets/hispanic-young-entrepreneur-his-office-desk-working-making-packages-with-fashion-clothes-ship-their-customers (1).png";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#57BC90",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, "haris@mail.com"),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Eclair", 262, 16.0),
  // createData("Eclair", 262, 16.0),
  // createData("Eclair", 262, 16.0),
  // createData("Eclair", 262, 16.0),
  // createData("Eclair", 262, 16.0),
];
// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (
//     event
//   ) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (
//     event
//   ) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (
//     event
//   ) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? (
//           <LastPageIcon
//             sx={{
//               fill: "#000",
//             }}
//           />
//         ) : (
//           <FirstPageIcon
//             sx={{
//               fill: "#000",
//             }}
//           />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight
//             sx={{
//               fill: "#000",
//             }}
//           />
//         ) : (
//           <KeyboardArrowLeft
//             sx={{
//               fill: "#000",
//             }}
//           />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft
//             sx={{
//               fill: "#000",
//             }}
//           />
//         ) : (
//           <KeyboardArrowRight
//             sx={{
//               fill: "#000",
//             }}
//           />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? (
//           <FirstPageIcon
//             sx={{
//               fill: "#000",
//             }}
//           />
//         ) : (
//           <LastPageIcon
//             sx={{
//               fill: "#000",
//             }}
//           />
//         )}
//       </IconButton>
//     </Box>
//   );
// }
const Customers = () => {
  // const [dltModal,setDeleteModal] = useState(false)
  const { dltModal, addModal, editModal } = useAppSelector(
    (state) => state.modal
  );

  const dispatch = useAppDispatch();
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [page, setPage] = React.useState(0);
  // const handleChangePage = (
  //   event,
  //   newPage
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <>
      <Box className="cusMain">
        <Sidebar />
        <Box className="cusContent">
          <Header />
          <Box className="wrapper">
            <Button
              style={{
                background: "linear-gradient(105deg, #57BC90, #004B40)",
                color: "white",
                padding: "15px",
                width: "250px",
              }}
              onClick={() => {
                dispatch(setAddModal(true));
              }}
              startIcon={<img src={AddIcon} alt="add" />}
            >
              Add New Customer
            </Button>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  sx={{ minWidth: 650 }}
                  stickyHeader
                  aria-label="customized table"
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
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          <Box className="imgNameWrap">
                            <img src={SampleImg} alt="SampleImg" />
                            <Typography className="username">
                              {row.name}
                            </Typography>
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography className="cusName">
                            {row.calories}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography className="username">
                            {row.fat}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Box className="imgNameWrap">
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => {
                                dispatch(setEditModal(true));
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => {
                                dispatch(setDltModal(true));
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <TableFooter>
            <TableRow>
              <TableCell>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={5}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                  sx={{ color: "#000", backgroundColor: "#fff" }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableCell>
            </TableRow>
          </TableFooter> */}
              </TableContainer>
            </Paper>
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
            <DeleteModal onClose={() => dispatch(setDltModal(false))} />
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
            <AddCustomer onClose={() => dispatch(setAddModal(false))} />
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
            <EditCustomer onClose={() => dispatch(setEditModal(false))} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default Customers;
