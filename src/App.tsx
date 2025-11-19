import React from 'react';
import type { Task } from './types';
import AddTask from './AddTask';

function App() {
  console.log('App rendered');
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'Learn React', isCompleted: false },
  ]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
