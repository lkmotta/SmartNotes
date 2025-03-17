import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/pomodoroTimer.css";

export default function PomodoroTimer() {
    var minutos = 25; // valor de teste: futuramente alterável na tela de config
    const [time, setTime] = useState(minutos * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isCountdownMode, setIsCountdownMode] = useState(true);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    if (isCountdownMode) {
                        return prevTime > 0 ? prevTime - 1 : 0;
                    } else {
                        return prevTime < minutos * 60 ? prevTime + 1 : minutos * 60;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, isCountdownMode]);

    const toggleTimer = () => setIsRunning(!isRunning);
    const toggleMode = () => setIsCountdownMode(!isCountdownMode);

    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    const percentage = (time / (minutos * 60)) * 100;

    return (
        <div className="pomodoro-container">
            <div className="top-row">
                <div className="stats-box">
                    <div className="stat-box">
                        <span className="stat-value">0 min</span>
                        <span className="stat-label">Prazo estimado</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-value">0 min</span>
                        <span className="stat-label">Tempo percorrido</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-value">0</span>
                        <span className="stat-label">Tarefas pendentes</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-value">0</span>
                        <span className="stat-label">Tarefas concluídas</span>
                    </div>
                </div>
                <div className="focus-time">
                    <span className="focus-time-label">Tempo de foco hoje</span>
                    <span className="focus-time-value">0 min</span>
                </div>
            </div>

            <div className="bottom-row">
                <div className="timer-section">
                    <div className="timer-circle">
                        <svg viewBox="0 0 130 130">
                            <circle cx="65" cy="65" r="60" className="circle-background" />
                            <circle
                                cx="65"
                                cy="65"
                                r="60"
                                className="circle-progress"
                                style={{ strokeDashoffset: `${(percentage / 100) * 377}px` }}
                            />
                        </svg>
                        <span className="timer-text">{minutes}:{seconds}</span>
                    </div>
                    <div className="buttons">
                        <button onClick={toggleTimer} id="play-pause-btn">
                            <i className={isRunning ? "bx bx-pause" : "bx bx-play"}></i>
                            <span id="play-pause-text">{isRunning ? "Pausar" : "Começar"}</span>
                        </button>
                        <div className="bottom-buttons">
                            <button onClick={toggleMode} id="mode-btn">
                                <i className={isCountdownMode ? "bx bxs-hourglass-top" : "bx bxs-hourglass-bottom"}></i>
                                Modo Timer
                            </button>
                            <Link to="/config" id="config-link">                            
                                <button id="config-btn">
                                    <i className="bx bxs-cog"></i>
                                    Configurar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="tasks">
                    <h3 id="tasks-title"><i className='bx bxs-circle'></i>Hoje</h3>
                    <Link to="/tasks" id="tasks-link">
                        <div className="add-task">
                            <p id='add-task-text'>+ Adicionar uma nova tarefa</p>
                        </div>
                    </Link>
                    <img
                        src="./img/svg/empty-box.svg"
                        alt="Sem tarefas"
                        className="empty-box"
                    />
                </div>
            </div>
        </div>
    );
}
