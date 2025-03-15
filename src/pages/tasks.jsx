import React, { useState, useRef, useEffect } from 'react';
import './css/tasks.css';

export default function Tasks() {
    const getCurrentDate = () => { // obtendo data atual
        const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date().toLocaleDateString('pt-BR', options);
    };

    const getCurrentDateISO = () => { // obtendo data atual em formato ISO
        return new Date().toISOString().split('T')[0];
    };

    // estados
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [taskDate, setTaskDate] = useState('');
    const [taskPomodoros, setTaskPomodoros] = useState(0);
    const [notify, setNotify] = useState(false);
    const [showPomodoroOverlay, setShowPomodoroOverlay] = useState(false);
    const taskInputRef = useRef(null);
    const addTaskDivRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => { // verificando se o clique foi fora da add-task-div e se taskName está vazio
            if (addTaskDivRef.current && !addTaskDivRef.current.contains(event.target) && taskName.trim() === '') {
                setIsAddingTask(false); // voltar o input para o estado inicial
                setShowPomodoroOverlay(false); // esconder o input de pomodoros
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [addTaskDivRef, taskName]);

    const decreasePomodoro = () => { // diminuir pomodoro
        setTaskPomodoros((prev) => Math.max(0, prev - 1));
    };

    const increasePomodoro = () => { // aumentar pomodoro
        setTaskPomodoros((prev) => Math.min(99, prev + 1));
    };

    const handleClockClick = (value) => { // setar valor do pomodoro
        setTaskPomodoros(value);
    };

    const addTask = () => { // adiciona tarefa
        if (taskName.trim() === '') return;
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            date: taskDate || getCurrentDateISO(),
            pomodoros: taskPomodoros,
            notify: notify
        };
        setTasks([...tasks, newTask]);
        setTaskName('');
        setTaskDate('');
        setTaskPomodoros(0);
        setNotify(false);
        setIsAddingTask(false);
        setShowPomodoroOverlay(false);
    };

    const handleKeyPress = (e) => { // adicionar tarefa ao pressionar Enter
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const deleteTask = (id) => { // deleta tarefa
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleAddTaskClick = () => { // seta foco no input
        setIsAddingTask(true);
        setTimeout(() => {
            if (taskInputRef.current) {
                taskInputRef.current.focus();
            }
        }, 0);
    };

    const todayTasks = tasks.filter(task => task.date === getCurrentDateISO()); // filtrando tarefas de hoje
    const plannedTasks = tasks.filter(task => task.date !== getCurrentDateISO()); // ||     tarefas planejadas

    return (
        <div className="app-container">
            <div className="main-content">
                <header>
                    <h1 className='texto'>Hoje</h1>
                    <div className="date">{getCurrentDate()}</div>
                </header>

                <div className="add-task-div" onClick={handleAddTaskClick} ref={addTaskDivRef}>
                    <p className='mais' onClick={addTask}>+</p>
                    {isAddingTask ? (
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="task-input"
                            placeholder="Digite o nome da tarefa"
                            ref={taskInputRef}
                        />
                    ) : (
                        <>
                            <p className='texto-add-task'>Adicionar uma nova tarefa</p>
                        </>
                    )}

                    <div className="task-controls">
                        <input
                            type="date"
                            title='Clique para setar a data da tarefa'
                            min={getCurrentDate()}
                            id="task-date"
                            className="set-date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                        />

                        <div className="pomodoros-container">
                            {[...Array(5)].map((_, index) => ( // criando 5 relógios de pomodoros
                                <i
                                key={index}
                                title={`${index + 1}`}
                                className="bx bx-time"
                                // se o indice for menor que taskPomodoros, pinta de #d1d1d1, senão #8d8d8d
                                style={{ color: index < taskPomodoros ? '#d1d1d1' : '#8d8d8d' }}
                                onClick={() => handleClockClick(index + 1)}
                                ></i>
                            ))}

                            <i // botao para abrir o bloco flutuante de input de pomodoros
                                className="bx bxs-up-arrow"
                                style={{ color: '#8d8d8d', fontSize: '0.5rem', cursor: 'pointer' }}
                                onClick={() => setShowPomodoroOverlay(true)}
                            ></i>
                        </div>
                        {showPomodoroOverlay && ( // bloco flutuante de input de pomodoros
                        <div className="pomodoro-overlay">
                            <button onClick={decreasePomodoro}>-</button>
                            <span>{taskPomodoros}</span>
                            <button onClick={increasePomodoro}>+</button>
                            <button onClick={() => setShowPomodoroOverlay(false)}>Fechar</button>
                        </div>
                        )}

                        <i // botao de notificação
                            className={notify ? 'bx bx-bell' : 'bx bx-bell-off'}
                            title={notify ? 'Desativar notificação' : 'Ativar notificação'}
                            onClick={() => setNotify(!notify)}
                        ></i>
                    </div>
                </div>

                
                <section className="tasks-section">
                    {todayTasks.length === 0 ? (
                        <div className="empty-tasks" style={{display:'none'}}><img src="./img/svg/empty-box.svg" alt="Sem Tarefas" /></div>
                    ) : ( // se houver tarefas para hoje
                        <div className="tasks-container">
                            {todayTasks.map((task) => ( // mapeando as tarefas
                                <div key={task.id} className="task-box"> 
                                    <input type="checkbox" onChange={() => { // checkbox
                                        task.completed = !task.completed; // invertendo o estado da tarefa
                                        setTasks([...tasks]); // atualizando o estado
                                    }} />
                                    <span className={`task-name ${task.completed ? 'completed' : ''}`}>{task.name}</span>
                                    <span className="task-date">{task.date}</span>
                                    <i className={task.notify ? 'bx bx-bell' : 'bx bx-bell-off'}></i>
                                    <i className='bx bx-trash-alt' onClick={() => deleteTask(task.id)}></i>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section className="tasks-section">
                    <h2>Planejado</h2>
                    {plannedTasks.length === 0 ? ( // se não houver tarefas planejadas
                        <div className="empty-tasks"><img src="./img/svg/empty-box.svg" alt="Sem Tarefas" /></div>
                    ) : ( // se houver tarefas planejadas
                        <div className="tasks-container">
                            {plannedTasks.map((task) => (
                                <div key={task.id} className="task-box">
                                    <input type="checkbox" onChange={() => { // checkbox
                                        task.completed = !task.completed;
                                        setTasks([...tasks]);
                                    }} />
                                    <span className={`task-name ${task.completed ? 'completed' : ''}`}>{task.name}</span>
                                    <span className="task-date">{task.date}</span>
                                    <i className={task.notify ? 'bx bx-bell' : 'bx bx-bell-off'}></i>
                                    <i className='bx bx-trash-alt' onClick={() => deleteTask(task.id)}></i>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div> 
    ); // fim do return
}