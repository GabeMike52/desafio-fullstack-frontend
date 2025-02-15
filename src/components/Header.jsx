import { useState } from "react";
import PropTypes from "prop-types";
import "../index.css";
import { toast } from "react-toastify";

const Header = ({ onAddTask }) => {
    const [taskTitle, setTaskTitle] = useState("");

    const notify = () =>
        toast.warn("Por favor, insira um título para a tarefa", {
            theme: "colored",
            closeButton: false,
            closeOnClick: true,
        });

    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === "") {
            notify();
            return;
        }

        onAddTask(taskTitle);

        setTaskTitle("");
    };

    return (
        <form className="new-task" onSubmit={handleFormSubmit}>
            <div className="form">
                <input
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    id="task"
                    value={taskTitle}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="add-btn">
                +
            </button>
        </form>
    );
};

Header.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default Header;
