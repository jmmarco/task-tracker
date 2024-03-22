import { useEffect, useReducer } from "react";
import TaskBody from "./components/tasks/TaskBody";
import TaskContainer from "./components/tasks/TaskContainer";
import TaskGroup from "./components/tasks/TaskGroup";
import TaskHeader from "./components/tasks/TaskHeader";
import useGetTasks from "./hooks/useGetTasks";
import groupsReducer from "./reducers/groupsReducer";
import ProgressBar from "./components/ProgressBar";
import Loader from "./components/loader/Loader";

function App() {
  const { tasks, loading /* error */ } = useGetTasks();

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
    <main className="relative min-h-screen bg-lodgify-gray-200 pt-24">
      <Loader loading={loading} />
      <TaskContainer>
        <TaskHeader title="Lodgify Grouped Tasks">
          <ProgressBar
            className="mt-2"
            value={state.normalizedProgress}
            name="Lodgify Grouped Tasks Completion Rate"
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
