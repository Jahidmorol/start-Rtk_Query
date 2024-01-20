import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-4">
        {todos?.map((item) => (
          <TodoCard
            key={item.id}
            {...item}
            // id={item.id}
            // title={item.title}
            // description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
