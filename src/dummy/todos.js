import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    text: "Take out the trash",
    completed: true,
  },
  {
    id: uuidv4(),
    text: "Meet with the boss",
    completed: true,
  },
  {
    id: uuidv4(),
    text: "Study lesson",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Complete the tasks",
    completed: false,
  },
];

export { todos as dummyTodos };