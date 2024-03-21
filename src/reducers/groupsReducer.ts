import { TaskItem } from "../types";

export type GroupState = {
  name: string;
  tasks: TaskItem[];
  isVisible: boolean;
  totalTaskValues: number;
}[];

export type GroupActions =
  | { type: "TOGGLE_GROUP"; payload: { groupName: string } }
  | {
      type: "TOGGLE_TASK";
      payload: { groupName: string; taskDescription: string };
    }
  | { type: "LOAD_TASKS"; payload: GroupState };

export default function groupsReducer(state: GroupState, action: GroupActions) {
  switch (action.type) {
    case "LOAD_TASKS":
      return action.payload;
    case "TOGGLE_GROUP":
      return state.map((group) => {
        if (group.name === action.payload.groupName) {
          return {
            ...group,
            isVisible: !group.isVisible,
          };
        }
        return group;
      });
    case "TOGGLE_TASK":
      return state.map((group) => {
        if (group.name === action.payload.groupName) {
          return {
            ...group,
            tasks: group.tasks.map((task) => {
              if (task.description === action.payload.taskDescription) {
                return {
                  ...task,
                  checked: !task.checked,
                };
              }
              return task;
            }),
          };
        }
        return group;
      });
    default:
      return state;
  }
}
