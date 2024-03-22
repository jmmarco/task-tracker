import {
  calculateGroupTotalTaskValues,
  calculateGroupsTotalCheckedTaskValues,
  calculateNormalizedProgress,
  initializeGroups,
} from "../lib/utils";
import { TaskGroupItem, TaskItem } from "../types/task-types";

export type GroupState = {
  name: string;
  tasks: TaskItem[];
  isVisible: boolean;
  totalTaskValues: number;
  completedTasks: number;
}[];

export type AppState = {
  groups: GroupState;
  groupsTotalTaskValues: number;
  groupsTotalCheckedTaskValues: number;
  normalizedProgress: number;
};

export type GroupActions =
  | { type: "TOGGLE_GROUP"; payload: { groupName: string } }
  | {
      type: "TOGGLE_TASK";
      payload: { groupName: string; taskDescription: string };
    }
  | { type: "LOAD_TASKS"; payload: TaskGroupItem[] };

export default function groupsReducer(state: AppState, action: GroupActions) {
  switch (action.type) {
    case "LOAD_TASKS": {
      const groupsTotalTaskValues = calculateGroupTotalTaskValues(
        action.payload,
      );
      const groupsTotalCheckedTaskValues =
        calculateGroupsTotalCheckedTaskValues(action.payload);
      return {
        ...state,
        groups: initializeGroups(action.payload),
        groupsTotalTaskValues: groupsTotalTaskValues,
        groupsTotalCheckedTaskValues,
        normalizedProgress: calculateNormalizedProgress(
          groupsTotalTaskValues,
          groupsTotalCheckedTaskValues,
        ),
      };
    }
    case "TOGGLE_GROUP":
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.name === action.payload.groupName) {
            return {
              ...group,
              isVisible: !group.isVisible,
            };
          }
          return group;
        }),
      };
    case "TOGGLE_TASK": {
      const updatedGroups = state.groups.map((group) => {
        if (group.name === action.payload.groupName) {
          const updatedTasks = group.tasks.map((task) => {
            if (task.description === action.payload.taskDescription) {
              return {
                ...task,
                checked: !task.checked,
              };
            }
            return task;
          });
          return {
            ...group,
            tasks: updatedTasks,
            completedTasks: updatedTasks.reduce(
              (total, task) => (task.checked ? task.value + total : total),
              0,
            ),
          };
        }
        return group;
      });

      const groupsTotalCheckedTaskValues =
        calculateGroupsTotalCheckedTaskValues(updatedGroups);
      return {
        ...state,
        groups: updatedGroups,
        groupsTotalCheckedTaskValues: groupsTotalCheckedTaskValues,
        normalizedProgress: calculateNormalizedProgress(
          state.groupsTotalTaskValues,
          groupsTotalCheckedTaskValues,
        ),
      };
    }

    default:
      return state;
  }
}
