import { GroupActions } from "../../reducers/groupsReducer";
import { TaskItem } from "../../types/task-types";
import Checkbox from "../inputs/Checkbox";

interface TaskListProps {
  name: string;
  tasks: TaskItem[];
  dispatch: React.Dispatch<GroupActions>;
}

export default function TaskList({ tasks, dispatch, name }: TaskListProps) {
  const handleTaskChange = (task: TaskItem) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { groupName: name, taskDescription: task.description },
    });
  };
  return (
    <ul className="mt-8 space-y-4" aria-label={`${name} task list`}>
      {tasks.map((task) => (
        <li
          key={task.description}
          role="task"
          className="flex items-center gap-x-4"
        >
          <Checkbox
            onChange={() => handleTaskChange(task)}
            defaultChecked={task.checked}
            name={task.description}
          />
        </li>
      ))}
    </ul>
  );
}
