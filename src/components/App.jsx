import React, { useState } from "react";
import { ThemeProvider, createTheme, Container } from "@mui/material";

import Header from "./Header";
import InputArea from "./input/InputArea";
import Task from "./tasks/Task";
import "../styles/styles.scss";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: '500'
        },
        h2: {
            fontSize: '2rem',
            fontWeight: '400'
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: '300',
            marginTop: '1.5%'
        }
    },
});

let nextTaskID = 1;

const App = props => {
    const [tasks, setTasks] = useState([]);

    const onTaskComplete = id => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    const onAddTask = (title, description) => {
        setTasks(prev => (
            [...prev,
            {
                title: title,
                description: description,
                id: nextTaskID++
            }
            ]
        ));
    };

    return (
        <ThemeProvider theme={theme}>
            <Header text={"To-do List"} />
            <Container>

                <InputArea
                    onAddTask={onAddTask}
                />

                <div id="tasks">
                    {tasks.map((task, i) => {
                        if (task.completed) return null;
                        return (
                            <Task
                                key={task.id}
                                title={task.title}
                                description={task.description}
                                id={task.id}
                                onComplete={onTaskComplete}
                            />
                        )
                    })}
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default App;
