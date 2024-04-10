import { useEffect, useReducer } from "react";
import TaskBody from "./tasks/TaskBody";
import TaskContainer from "./tasks/TaskContainer";
import TaskGroup from "./tasks/TaskGroup";
import TaskHeader from "./tasks/TaskHeader";
import useGetTasks from "../hooks/useGetTasks";
import groupsReducer from "../reducers/groupsReducer";
import ProgressBar from "./progress/ProgressBar";
import Loader from "./loader/Loader";

function App() {
  const { tasks, loading } = useGetTasks();

  const [state, dispatch] = useReducer(groupsReducer, {
    groups: [],
    groupsTotalTaskValues: 0,
    groupsTotalCheckedTaskValues: 0,
    normalizedProgress: 0,
  });

  useEffect(() => {
    if (tasks.length > 0) {
      dispatch({
        type: "LOAD_TASKS",
        payload: tasks,
      });
    }
  }, [tasks]);

  const { groups } = state;

  return (
    <main className="relative flex min-h-screen justify-center py-8">
      <Loader loading={loading} />
      <TaskContainer>
        <TaskHeader title="Grouped Tasks">
          <ProgressBar
            className="mt-2"
            value={state.normalizedProgress}
            name="Grouped Tasks Completion Rate"
          />
        </TaskHeader>
        <TaskBody>
          <TaskGroup tasksGroup={groups} dispatch={dispatch} />
        </TaskBody>
      </TaskContainer>
    </main>
  );
}

export default App;
