import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>Nenhuma tarefa encontrada!</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.func.isRequired,
};

export default TaskList;
