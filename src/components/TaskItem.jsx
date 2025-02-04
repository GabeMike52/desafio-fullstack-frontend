import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
    return (
        <li className="task-item">
            <div>
                <strong>{task.title}</strong>
            </div>
            <div>
                <small>{new Date(task.created_at).toLocaleDateString()}</small>
            </div>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.func.isRequired,
};

export default TaskItem;
