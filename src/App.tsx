import { useEffect, useReducer } from "react";
import ProgressBarV2 from "./components/ProgressBarV2";
import TaskBody from "./components/tasks/TaskBody";
import TaskContainer from "./components/tasks/TaskContainer";
import TaskGroup from "./components/tasks/TaskGroup";
import TaskHeader from "./components/tasks/TaskHeader";
import useGetTasks from "./hooks/useGetTasks";
import groupsReducer from "./reducers/groupsReducer";
import { initializeGroups } from "./lib/utils";

function App() {
  const { tasks, loading /* error */ } = useGetTasks();

  const [state, dispatch] = useReducer(groupsReducer, []);

  useEffect(() => {
    if (tasks.length > 0) {
      dispatch({
        type: "LOAD_TASKS",
        payload: initializeGroups(tasks),
      });
    }
  }, [tasks]);

  // Nt = Vt * 100 / (Sum of all tasks values)

  console.log("state", state);

  return (
    <main className="min-h-screen bg-lodgify-gray-200 pt-24">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskContainer>
          <TaskHeader title="Lodgify Grouped Tasks">
            <ProgressBarV2
              className="mt-2"
              value={75}
              name="Lodgify Grouped Tasks Completion Rate"
            />
          </TaskHeader>
          <TaskBody>
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            <TaskGroup tasksGroup={state} dispatch={dispatch} />
          </TaskBody>
        </TaskContainer>
      )}
    </main>
  );
}

export default App;
