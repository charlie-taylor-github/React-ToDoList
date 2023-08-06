import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const descriptionAnimations = {
    hovering: { y: 0, opacity: 1 },
    notHovering: { y: "-1.5vw", opacity: 0 }
}

const TaskDescription = props => {
    return (
        <motion.div
            initial="notHovering"
            animate={props.isHovering ? "hovering" : "notHovering"}
            variants={descriptionAnimations}
            transition={{ duration: 0.2 }}
        >
            <Typography variant="h4" className="task-description">
                {props.description}
            </Typography>
        </motion.div>
    );
}

export default TaskDescription;
