import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { TaskGroupItem } from "../types/task-types";

function useGetTasks() {
  const url = import.meta.env.VITE_API_URL;
  const [tasks, setTasks] = useState<TaskGroupItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | AxiosError>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setTasks(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url]);

  return { tasks, loading, error };
}

export default useGetTasks;
