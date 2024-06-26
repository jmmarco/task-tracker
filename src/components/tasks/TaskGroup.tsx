import { cn } from "../../lib/utils";
import { GroupActions, GroupState } from "../../reducers/groupsReducer";
import Button from "../buttons/Button";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import NoteClip from "../icons/NoteClip";
import TaskList from "./TaskList";
import { Transition } from "@headlessui/react";

interface TaskGroupProps {
  tasksGroup: GroupState;
  dispatch: React.Dispatch<GroupActions>;
}

export default function TaskGroup({ tasksGroup, dispatch }: TaskGroupProps) {
  const handleGroupToggle = (groupName: string) => {
    dispatch({ type: "TOGGLE_GROUP", payload: { groupName: groupName } });
  };

  return (
    <ul className="divide-y divide-gray-100" aria-label="Grouped Tasks">
      {tasksGroup.map((taskGroup) => {
        const selectedColorClass =
          taskGroup.completedTasks === taskGroup.totalTaskValues
            ? "text-green-400 fill-green-400"
            : "text-slate-900";
        return (
          <li key={taskGroup.name} className="p-6">
            <div className="flex items-center ">
              <NoteClip className={cn("mr-4", selectedColorClass)} />
              <h3 className={selectedColorClass}>{taskGroup.name}</h3>
              <Button
                className="ml-auto flex items-center gap-x-2 rounded text-base font-normal text-gray-300 focus:outline-green-400 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                onClick={() => handleGroupToggle(taskGroup.name)}
              >
                {taskGroup.isVisible ? (
                  <>
                    Hide
                    <ChevronUp className="fill-gray-300 text-gray-300" />
                  </>
                ) : (
                  <>
                    Show
                    <ChevronDown className="fill-gray-300 text-gray-300" />
                  </>
                )}
              </Button>
            </div>
            <Transition
              show={taskGroup.isVisible}
              enter="transition duration-100 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transform duration-100 transition ease-in-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <TaskList
                name={taskGroup.name}
                tasks={taskGroup.tasks}
                dispatch={dispatch}
              />
            </Transition>
          </li>
        );
      })}
    </ul>
  );
}
