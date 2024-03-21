export interface TaskItem {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroupItem {
  name: string;
  tasks: TaskItem[];
}
