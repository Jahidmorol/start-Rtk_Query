// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

type TItemType = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // get form local machine
  //   const { todos } = useAppSelector((state) => state.todos);

  // get form server  machine
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-3 space-y-4">
        {todos?.data?.map((item: TItemType) => (
          <TodoCard
            key={item._id}
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
