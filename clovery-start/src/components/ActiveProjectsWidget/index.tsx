import {useCallback, useEffect, useState} from "react";
import type {Project} from "../../types";
import {projects} from "../../data/projects.ts";
import styles from './ActiveProjectsWidget.module.scss';
import ProjectCard from "./ProjectCard";

const ROTATION_INTERVAL_MS: number = 5000;

const ActiveProjectsWidget: React.FC = () => {
    const [currentProjects, setCurrentProjects] = useState<Project[]>([]);

    const getRandomTwo = useCallback((): Project[] => {
        if (projects.length < 2) return projects;
        const copy: Project[] = [...projects];
        const result: Project[] = [];
        while (result.length < 2 && copy.length > 0) {
            const index: number = Math.floor(Math.random() * copy.length);
            result.push(copy[index]);
            copy.splice(index, 1);
        }
        return result;
    }, []);

    const rotateProjects = useCallback((): void => {
        const two: Project[] = getRandomTwo();
        setCurrentProjects(two);
    }, [getRandomTwo]);

    useEffect(() => {
        if (projects.length < 2) {
            setCurrentProjects(projects);
            return;
        }
        rotateProjects();
        const intervalId: number = setInterval(rotateProjects, ROTATION_INTERVAL_MS);
        return () => clearInterval(intervalId);
    }, [rotateProjects, projects]);

    const handleRefresh = (): void => {
        rotateProjects();
    };

    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <h3 className={styles.title}>Активные проекты</h3>
                <button onClick={handleRefresh} className={styles.refreshBtn}>
                    Обновить
                </button>
            </div>
            <div className={styles.projectList}>
                {currentProjects.map((project: Project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
            {currentProjects.length === 0 && (
                <p className={styles.empty}>Нет активных проектов</p>
            )}
        </div>
    );
};

export default ActiveProjectsWidget;