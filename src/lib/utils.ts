import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TaskGroupItem } from "../types/task-types";
import { GroupState } from "../reducers/groupsReducer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToElementId(str: string) {
  return str.replace(/[^a-z]/gi, "-");
}

export function initializeGroups(taskGroups: TaskGroupItem[]): GroupState {
  return taskGroups.map((group) => ({
    ...group,
    isVisible: false,
    completedTasks: group.tasks.reduce(
      (total, task) => (task.checked ? task.value + total : total),
      0,
    ),
    totalTaskValues: group.tasks.reduce((total, task) => total + task.value, 0),
  }));
}

export function calculateGroupTotalTaskValues(groups: TaskGroupItem[]) {
  return groups.reduce((total, group) => {
    return (
      total +
      group.tasks.reduce((groupTotal, task) => groupTotal + task.value, 0)
    );
  }, 0);
}

export function calculateGroupsTotalCheckedTaskValues(groups: TaskGroupItem[]) {
  return groups.reduce((total, group) => {
    return (
      total +
      group.tasks.reduce(
        (groupTotal, task) =>
          task.checked ? groupTotal + task.value : groupTotal + 0,
        0,
      )
    );
  }, 0);
}

export function calculateNormalizedProgress(
  totalTaskValues: number,
  totalCheckedTaskValues: number,
): number {
  // Nt = Vt * 100 / ∑(Vt)
  return (totalCheckedTaskValues * 100) / totalTaskValues;
}

export function LogError(error: Error, info: React.ErrorInfo) {
  if (import.meta.env.DEV) {
    console.log(error, info);
  }
  if (import.meta.env.PROD) {
    // For production do something with the error, e.g. log to an external API
  }
}
