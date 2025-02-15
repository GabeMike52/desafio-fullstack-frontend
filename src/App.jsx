import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
    const uri = "http://localhost:3600/tarefas";
    const customToastId = "custom-id";

    const [tasks, setTasks] = useState([]);

    const successToast = (message) =>
        toast.success(message, {
            theme: "colored",
            closeButton: false,
            closeOnClick: true,
        });

    const noTaskToast = () =>
        toast.error("Nenhuma tarefa encontrada!", {
            theme: "colored",
            closeButton: false,
            closeOnClick: true,
            toastId: customToastId,
        });

    const getTasks = async () => {
        try {
            const response = await axios.get(uri);
            if (response.data.length === 0) {
                noTaskToast();
            }
            setTasks(response.data);
        } catch (error) {
            console.error("Erro ao buscar as tarefas: ", error);
        }
    };

    const addTask = async (title) => {
        try {
            const response = await axios.post(uri, { title });
            setTasks([...tasks, response.data.task]);
            const message = response.data.message;
            successToast(message);
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
            <ToastContainer />
        </>
    );
};

export default App;
