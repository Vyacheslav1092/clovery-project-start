import React from "react";
import type {Project} from "../../../types";
import styles from "./ProjectCard.module.scss";

const ProjectCard: React.FC<{project: Project}> = ({project}) => (
    <div key={project.id} className={styles.projectCard}>
        <h4 className={styles.title}>{project.name}</h4>
        <div className={styles.progressBar}>
            <div
                className={styles.progressFill}
                style={{width: `${project.progress}%`}}
            />
        </div>
        <span className={styles.progressLabel}>{project.progress}%</span>
    </div>
)

export default ProjectCard;