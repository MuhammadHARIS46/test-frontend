import React from "react";
import "./styles.css";
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppDispatch } from "../../store";
import { setSidebar } from "../../store/modal";
const Header = () => {
  const matches = useMediaQuery("(max-width:960px)");
  const dispatch = useAppDispatch();
  return (
    <Box className="headerMain">
      {matches && (
        <IconButton
          onClick={() => {
            dispatch(setSidebar(true));
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Typography className="headerText">CUSTOMERS</Typography>
    </Box>
  );
};

export default Header;
