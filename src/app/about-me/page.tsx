// Assuming this is in app/about-me.page.tsx or a similar file

import styles from './AboutMe.module.css'; // Make sure to create this CSS module

export default function AboutMe() {
  const skills = ['JavaScript', 'React', 'Next.js', 'CSS', 'HTML']; // Example skills

  return (
    <div className={styles.container}>
      <img src="/images/pfp.png" alt="Profile Picture" className={styles.profilePic} />
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        Hello World!, i&apos;m an aspiring computer science student with a boundless curiosity for the digital world and a fervent desire to innovate. My journey into the realm of technology began at a young age when I first encountered the wonders of programming through a simple coding tutorial. Since then, my passion for problem-solving and creative thinking has only intensified, propelling my to pursue a career in computer science. With a strong foundation in mathematics, logic, and science I approached challenges with a systematic mindset, breaking down complex problems into manageable components. Eager to expand my knowledge, I immersed myself in online courses, coding challenges, and hackathons, constantly pushing the boundaries of my understanding especially in web development and embedded systems. Driven by a vision to harness technology for social good, my dreams of developing innovative solutions that address pressing issues and make a meaningful impact on people&apos;s lives. As I embark on my academic journey, I am determined to seize every opportunity to learn, grow, and contribute to the ever-evolving field of computer science.</p>
      <div className={styles.skills}>
        {skills.map(skill => (
          <span key={skill} className={styles.skillTag}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
