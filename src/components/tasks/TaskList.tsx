import { TaskItem } from "../../types";

interface TaskListProps {
  tasks: TaskItem[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul role="task-list" className="mt-8 space-y-4">
      {tasks.map((task) => (
        <li
          key={task.description}
          role="task"
          className="flex items-center gap-x-4"
        >
          <input
            type="checkbox"
            id={task.description}
            defaultChecked={task.checked}
            className="text-lodgify-green-400 h-4 w-4 rounded border-gray-300 focus:ring-transparent"
          />
          <label className="text-base" htmlFor={task.description}>
            {task.description}
          </label>
        </li>
      ))}
    </ul>
  );
}
