import React from 'react';
import './css/tasks.css';

export default function Tasks() {

    const getCurrentDate = () => {
        const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date().toLocaleDateString('pt-BR', options);
    };

    const [tasks, setTasks] = React.useState([]);


    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <header>
                    <h1 className='texto'>Hoje</h1>
                    <div className="date">{getCurrentDate()}</div>
                </header>

                <div className="add-task-div" onClick={addTask}>
                    <p className='mais'>+</p>
                    <p className='texto-add-task'>adicionar tarefas</p>
                </div>

                <section className="tasks-section">
                    <h2>Planejado</h2>
                    {tasks.length === 0 ? (
                        <div className="empty-tasks">Sem tarefas</div>
                    ) : (
                        <div className="tasks-container">
                            {tasks.map((task) => (
                                <div key={task.id} className="task-box">
                                    <span>{task.time}</span>
                                    <button onClick={() => deleteTask(task.id)}>Excluir</button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}