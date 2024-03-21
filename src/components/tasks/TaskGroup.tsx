import { GroupActions, GroupState } from "../../reducers/groupsReducer";
import Button from "../Button";
import ChevronDown from "../icons/ChevronDown";
import NoteClip from "../icons/NoteClip";
import TaskList from "./TaskList";

interface TaskGroupProps {
  tasksGroup: GroupState;
  dispatch: React.Dispatch<GroupActions>;
}

export default function TaskGroup({ tasksGroup, dispatch }: TaskGroupProps) {
  const handleGroupToggle = (groupName: string) => {
    dispatch({ type: "TOGGLE_GROUP", payload: { groupName: groupName } });
  };

  return (
    <ul className="divide-y divide-lodgify-gray-100">
      {tasksGroup.map((taskGroup) => (
        <li key={taskGroup.name} className="p-6">
          <div className="flex items-center ">
            <NoteClip className="mr-4" />
            <h3>{taskGroup.name}</h3>
            <Button
              className="text-lodgify-gray-300 focus:outline-lodgify-green-400 focus-visible:outline-lodgify-green-400 ml-auto flex items-center gap-x-2 rounded text-base font-normal focus-visible:outline-offset-4"
              onClick={() => handleGroupToggle(taskGroup.name)}
            >
              {taskGroup.isVisible ? "Hide" : "Show"}
              <ChevronDown className="text-lodgify-gray-300 fill-lodgify-gray-300" />
            </Button>
          </div>
          {taskGroup.isVisible && taskGroup.tasks.length > 0 && (
            <TaskList tasks={taskGroup.tasks} />
          )}
        </li>
      ))}
    </ul>
  );
}
