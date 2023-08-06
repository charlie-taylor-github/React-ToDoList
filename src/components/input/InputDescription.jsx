import React from "react";
import { motion } from "framer-motion";

const descriptionAnimations = {
    hovering: { y: 0, opacity: 1 },
    notHovering: { y: "-1.5vw", opacity: 0 },
    clicking: { y: "-1.5vw", opacity: 0 }
}

const InputDescription = ({ description, setDescription, isHovering, isClicking, onSubmit }) => {

    const currentAnimation = isClicking
        ? "clicking"
        : isHovering ?
            "hovering"
            : "notHovering";

    return (
        <>
            <motion.div
                initial="notHovering"
                animate={currentAnimation}
                variants={descriptionAnimations}
                transition={{ duration: 0.2 }}
            >
                <input
                    id="description-input"
                    placeholder="description..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    onMouseOver={e => e.target.focus()}
                    onKeyDown={e => {
                        if (e.repeat) return;
                        if (e.key === "Enter") onSubmit();
                    }}
                />
            </motion.div>
        </>
    );
};

export default InputDescription;
