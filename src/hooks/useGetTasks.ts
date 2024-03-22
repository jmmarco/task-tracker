import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { TaskGroupItem } from "../types/task-types";
import { useErrorBoundary } from "react-error-boundary";

function useGetTasks() {
  const url = import.meta.env.VITE_API_URL;
  if (!url) {
    throw new Error(
      "API URL is not defined. Check that .env file is set up correctly. Refer to README for details.",
    );
  }
  const [tasks, setTasks] = useState<TaskGroupItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setTasks(response.data);
      } catch (error) {
        showBoundary(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [url, showBoundary]);

  return { tasks, loading };
}

export default useGetTasks;
