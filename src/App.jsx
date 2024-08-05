import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center bg-blue-300">
        <TodoList></TodoList>
      </div>
    </div>
  );
}
export default App;
