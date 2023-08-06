import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputHeader from "./InputHeader";
import InputDescription from "./InputDescription";

const animations = {
    hovering: {
        padding: "2%", paddingBottom: "5%"
    },
    notHovering: {
        padding: "1%", paddingBottom: "1%"
    },
    clicking: {
        scale: 0.8
    },
    notClicking: {
        scale: 1
    }
}

const InputArea = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const titleRef = useRef(null);

    const currentAnimation = isClicking
        ? 'clicking'
        : isHovering
            ? 'hovering'
            : 'notHovering';

    const onKeyUp = e => {
        if (e.key === "Enter") setIsClicking(false);
    }

    useEffect(() => {
        document.addEventListener('keyup', onKeyUp);
        document.addEventListener('mouseup', () => setIsClicking(false));
        return () => {
            document.removeEventListener('keyup', onKeyUp);
            document.removeEventListener('mouseup', () => setIsClicking(false));
        };
    });

    const resetInputs = () => {
        setTitle("")
        setDescription("")
        titleRef.current.focus();
    }

    const onSubmit = () => {
        setIsClicking(true);
        onAddTask(title, description);
        resetInputs();
    }

    return (
        <>
            <motion.div
                id="create-task-area"
                onMouseEnter={() => {
                    setIsHovering(true);
                }}
                onMouseLeave={() => {
                    setIsHovering(false);
                }}
                initial={false}
                animate={currentAnimation}
                variants={animations}
            >
                <InputHeader
                    title={title}
                    setTitle={setTitle}
                    onSubmit={onSubmit}
                    ref={titleRef}
                />

                <InputDescription
                    description={description}
                    setDescription={setDescription}
                    isHovering={isHovering}
                    isClicking={isClicking}
                    onSubmit={onSubmit}
                />
            </motion.div >
        </>
    );
};

export default InputArea;
