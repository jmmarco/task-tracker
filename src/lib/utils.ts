import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TaskGroupItem } from "../types";
import { GroupState } from "../reducers/groupsReducer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initializeGroups(taskGroups: TaskGroupItem[]): GroupState {
  return taskGroups.map((group) => ({
    ...group,
    isVisible: false,
    totalTaskValues: group.tasks.reduce((total, task) => total + task.value, 0),
  }));
}
