import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Logo from "../../assets/images.png";
import CustomerIcon from "../../assets/customers icon.svg";
import "./styles.css";
import { useAppDispatch } from "../../store";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import { setSidebar } from "../../store/modal";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledSidebar = styled("aside", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ isOpen, matches }) => ({
  width: "250px",
  height: "100vh",
  background: "#015249",
  position: "fixed",
  top: 0,
  left: isOpen ? "0%" : "-350px",
  transition: "left 0.5s ease-in-out",
  zIndex: 1200,
}));
const Sidebar = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <StyledSidebar isOpen={isOpen} matches={matches}>
      <Box className="sidebarMain">
        <Box className="iconCloseBtnWrap">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "200px",
            }}
          />
          {matches && (
            <IconButton
              onClick={() => {
                dispatch(setSidebar(false));
              }}
            >
              <CloseIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          )}
        </Box>

        <Button
          style={{
            background: "#043933",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "white",
          }}
        >
          <img src={CustomerIcon} alt="icon" />
          <Typography>Customers</Typography>
        </Button>
      </Box>
    </StyledSidebar>
  );
};
export default Sidebar;
