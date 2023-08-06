import React from "react";
import { Typography } from "@mui/material";

const Header = props => {
    return (
        <header id="header">
            <Typography className="title" variant="h1">To-do List</Typography>
        </header>
    );
};

export default Header;