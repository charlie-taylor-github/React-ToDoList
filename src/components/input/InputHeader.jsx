import React from "react";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';

const InputHeader = React.forwardRef(({ title, setTitle, onSubmit }, titleRef) => {
    return (
        <div id="input-header">
            <input
                id="title-input"
                placeholder="next i will..."
                onMouseOver={() => titleRef.current.focus()}
                onChange={e => setTitle(e.target.value)}
                value={title}
                ref={titleRef}
                onKeyDown={e => {
                    if (e.repeat) return;
                    if (e.key === "Enter") onSubmit();
                }}
            />
            <motion.button
                whileHover={{ scale: 1.2 }}
                id="add-task-button"
                onMouseDown={onSubmit}
                onKeyDown={e => {
                    if (e.repeat) return;
                    if (e.key === "Enter") onSubmit();
                }}
            >
                <AddIcon id="add-task-icon" />
            </motion.button>
        </div>
    );
});

export default InputHeader;
