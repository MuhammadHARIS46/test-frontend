// import { Theme, styled } from '@mui/material';
// import useMediaQuery from "@mui/material/useMediaQuery";
// import React from 'react';

// const StyledSidebar = styled('aside', {
//   shouldForwardProp: (prop) => prop !== 'isOpen',
// })(({ isOpen }) => ({
//   width: '100%',
//   height: '100vh',
//   background: 'rgba(213, 174, 227, 0.71)',
//   backdropFilter: 'blur(9.079545974731445px)',
//   position: 'fixed',
//   top: 0,
//   left: isOpen ? '5%' : '-265px',
//   transition: 'top 0.5s ease-in-out',
//   zIndex: 1200,
// }));

// const Sidebar = ({ isOpen, children }) => {
//   return <StyledSidebar isOpen={isOpen}>{children}</StyledSidebar>;
// };

// export default Sidebar;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "../../assets/images.png";
import CustomerIcon from "../../assets/customers icon.svg";
import "./styles.css";

const Sidebar = () => {
  return (
    <Box className="sidebarMain">
      <img src={Logo} alt="logo" />
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
  );
};
export default Sidebar;
