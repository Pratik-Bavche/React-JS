import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
