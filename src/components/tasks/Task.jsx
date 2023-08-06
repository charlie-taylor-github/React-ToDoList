import React, { useState } from "react";
import TaskBody from "./TaskBody";
import { motion, AnimatePresence } from "framer-motion";

const deleteAnimationTime = 0.3;

const animations = {
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
};

const Task = props => {

    const [isChecked, setIsChecked] = useState(false);

    const onComplete = () => {
        setIsChecked(true);
        setTimeout(
            () => props.onComplete(props.id),
            deleteAnimationTime * 1000
        );
    }

    return (
        <AnimatePresence initial={false}>
            {!isChecked && (
                <motion.div
                    animate="animate"
                    exit="exit"
                    variants={animations}
                    transition={{ duration: deleteAnimationTime }}
                >
                    <TaskBody
                        title={props.title}
                        description={props.description}
                        onComplete={onComplete}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Task;
