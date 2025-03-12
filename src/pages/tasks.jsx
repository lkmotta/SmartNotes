import React from 'react';
import './css/tasks.css';

export default function Tasks() {

    return (
        <div className="app-container">
            <div className="main-content">
                <header>
                    <h1>Hoje</h1>
                    <div className="date">Segunda-feira, 01/12/2025</div>
                </header>

                <button className="add-task-button">
                    + Adicionar uma nova tarefa
                </button>

                <section className="tasks-section">
                    <h2>Planejado</h2>
                    <div className="empty-tasks">Sem tarefas</div>
                </section>
            </div>
        </div>
    );
}