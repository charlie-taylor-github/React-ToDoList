import React, { useState } from "react";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Typography } from "@mui/material";

const TaskHeader = props => {
    const [isHoveringCheckbox, setIsHoveringCheckbox] = useState(false);

    const checkboxAttributes = {
        className: "task-checkbox",
        onMouseEnter: () => setIsHoveringCheckbox(true),
        onMouseLeave: () => setIsHoveringCheckbox(false),
        onClick: props.onComplete
    };

    const getCurrentCheckboxIcon = () => {
        return isHoveringCheckbox ? (
            <CheckBoxIcon {...checkboxAttributes} />
        ) : (
            <CheckBoxOutlineBlankIcon {...checkboxAttributes} />
        );
    }

    return (
        <div className="task-header">
            <Typography
                variant="h2"
                className="task-title"
                style={props.isHovering ? { textDecoration: "underline" } : {}}
            >
                {props.title}
            </Typography>

            {getCurrentCheckboxIcon()}
        </div>
    );
};

export default TaskHeader;
