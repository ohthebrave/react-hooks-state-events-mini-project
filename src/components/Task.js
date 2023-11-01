

function Task({category, text, handleDelete}) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text)}>Delete</button>
    </div>
  );
}

export default Task;
