const TodoItem = (props) => (
  <div 
    className={`todo ${props.completed ? 'done' : 'undone'}`} 
    onClick={() => props.markIsDone(props.id)}
  >
    <span>{props.title}</span>
    
    <style jsx>{`
      .todo {
        cursor: pointer;
        background: #F3F4F6;
        padding: 10px;
        margin: 20px 0;
        border-radius: 10px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      .undone {
        color: #374151;
      }
      .done {
        color: #D1D5DB;
        text-decoration:line-through; 
      }
    `}
    </style>
  </div>
)

export default TodoItem