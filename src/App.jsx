import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"
import axios from "axios";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const notify = (message) => toast(message);

    const getTasks = async () => {
        try {
            const response = await axios.get("http://localhost:3600/tarefas");
            setTasks(response.data);
        } catch (error) {
            console.error("Erro ao buscar as tarefas: ", error);
        }
    };

    const addTask = async (title) => {
        try {
            const response = await axios.post("http://localhost:3600/tarefas", { title });
            setTasks([...tasks, response.data.task]);
            const message = response.data.message;
            notify(message);
        } catch (error) {
            console.error("Erro ao criar tarefa: ", error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <Header onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </>
    );
};

export default App;
