import styles from './Experience.module.css';

const Experience = () => {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Experience</h2>

                {/* Professional Experience */}
                <div className={styles.block}>
                    <h3>Professional Experience</h3>

                    <div className={styles.item}>
                        <h4>Central Review Wing Member</h4>
                        <span>
                            Forengers Foundation <br />
                            November 2025 - Present
                        </span>
                        <p>
                            Conducted independent reviews and inspections to ensure compliance with organizational 
                            policies, financial regulations, and operational standards. Identified process gaps, 
                            recommended corrective actions, and supported audit and vigilance initiatives to improve 
                            efficiency and accountability.
                        </p>

                    </div>

                    <div className={styles.item}>
                        <h4>AI Automation and Full Stack Developer Intern</h4>
                        <span>
                            Zentrixel <br />
                            July 2025 - September 2025
                        </span>
                        <ul>
                            Developed ZenAISkillJet, an AI-powered training platform that personalizes learning 
                            paths, captures organizational knowledge, and simulates real-world scenarios for skill 
                            enhancement.
                        </ul>
                        <ul>
                            Built ZenFacility, a comprehensive property management application; designed database 
                            architecture and implemented backend APIs to enable seamless tenant and facility 
                            operations.
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h4>Full Stack Developer Intern</h4>
                        <span>
                            OPM Corporation <br />
                            December 2024 - February 2025
                        </span>
                        <p>
                           Developed Ridlin, a web-based platform designed for the pet community, offering 
                           centralized access to pet-related services, curated resources, and essential information. 
                           The platform aims to simplify pet care by connecting pet owners with reliable services and 
                           improving overall accessibility within the pet ecosystem.
                        </p>
                    </div>
                </div>

                {/* Research Experience */}
                <div className={styles.block}>
                    <h3>Research Experience</h3>

                    <div className={styles.item}>
                        <h4>Taylor's Series</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Sensitivity Analysis</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Saddle Point</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Necessary and Sufficient Conditions</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Information Entropy</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Classification and Application Eigenvalues</h4>
                        <span>Basics of Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>Dijkstra's Algorithm</h4>
                        <span>Combinatorial Optimization</span>
                    </div>
                    <div className={styles.item}>
                        <h4>MaxOne Problem</h4>
                        <span>Approximation Algorithms</span>
                    </div>
                </div>

                {/* Positions */}
                <div className={styles.block}>
                    <h3>Positions</h3>
                </div>
                        <div className={styles.item}>
                        <h4>Chairperson</h4>
                        <span>
                            Indian Society for Technical Education (ISTE) <br />
                            July 2025 - Present
                        </span>
                        <p>
                           As Chairperson, led and organized technical events and workshops, including hackathons, 
                           Smart India Hackathon (SIH), and idea competitions, ensuring strategic planning and 
                           successful execution.
                        </p>
                        </div>

                        <div className={styles.item}>
                        <h4>Treasurer</h4>
                        <span>
                            Indian Society for Technical Education (ISTE) <br />
                            August 2024 - June 2025
                        </span>
                        <p>
                           As Treasurer, organized and led technical events and workshops such as hackathons, 
                           Smart India Hackathon (SIH), and idea competitions, overseeing budgeting, coordination, and 
                           smooth execution of activities.
                        </p>
                        </div>

                        <div className={styles.item}>
                        <h4>Cultural Secretary</h4>
                        <span>
                            Association of Computer Engineering Students (ACES) <br />
                            August 2024 - May 2025
                        </span>
                        <p>
                           Organized and coordinated both technical and non-technical events, fostering 
                           collaboration, peer learning, and active participation among students and team members.
                        </p>
                    </div>
            </div>
        </section>
    );
};

export default Experience;