import "./style.scss";


export function List() {
  const tasks = [
    { name: "React", time: "02:00:00" },
    { name: "Typescript", time: "01:00:00" },
  ];
  return (
    <aside>
      <ul className="listaTarefas">
        {tasks.map((el, i) => (
          <li key={i} className='item'>
            <h2>{el.name}</h2>
            <span>{el.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
