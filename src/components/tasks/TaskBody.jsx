import React, { useState } from "react";
import { motion } from "framer-motion";

import TaskHeader from "./TaskHeader";
import TaskDescription from "./TaskDescription";

const animations = {
    hovering: { paddingBottom: "5%" },
    notHovering: { paddingBottom: "2%" }
};

const TaskBody = props => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={isHovering ? "hovering" : "notHovering"}
            exit="exit"
            variants={animations}
            transition={{ duration: 0.2, delay: isHovering ? 0 : 0.05 }}
            className="task"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <TaskHeader
                isHovering={isHovering}
                title={props.title}
                onComplete={props.onComplete}
            />

            <TaskDescription
                isHovering={isHovering}
                description={props.description}
            />
        </motion.div>
    );
};

export default TaskBody;
