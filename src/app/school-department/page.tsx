// Assuming this is in app/school-department.page.tsx or a similar file

import styles from './SchoolDepartment.module.css'; // Make sure to create this CSS module

export default function SchoolDepartment() {    
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src="/images/oldSCC.jpg" alt="School" className={styles.image} />
        <div className={styles.description}>
          <h2>Saint Columban College</h2>
          <p>St. Columban&apos;s lifetime was devoted in selfless giving.  Though a son of a highborn Christian and belong to the nobility, his great love was to give himself to God in the loving service of God&apos;s children.  He decided to become a monk and came in contact with men famous for their holiness and who inspired him with a love for the sacred sciences. St. Columban was born in Leinter, Ireland, believed to be in 543 A.D. He was noble in his bearing and handsome.  He studied in his boyhood, probably learned his letters in his Psalter as other Irish saints and wrote Latin in the Sacred Scriptures.  When young Columban told his mother to leave home to become a monk, his mother utterly refused, however, his mother’s pleading and refusal not to give him permission was to no avail.  He left his native Leinster, put himself under the care of a venerable man named Sinell in Cluain Inis, where the foundations of his learning were laid.  Sinell was famous for his holiness and for his learning in sacred things.  Under him, St. Columban was inspired with a love of the sacred sciences and taught how to think clearly and with intellectual curiosity and freedom.  After Cluain Inis, St. Columban decided to be a monk and set out for the monastery of Bangor, to place himself under the rule of Comghall, the most notable father of monks in Ireland, well known for his insistence on study and strict discipline.  He prayed, fasted, denied, and mortified himself, taking up his cross to follow Christ. </p>
        </div>
      </div>
      <div className={styles.section}>
        <img src="/images/department.jpg" alt="Department" className={styles.image} />
        <div className={styles.description}>
          <h2>SCC - College of Computing Studies</h2>
          <p>Calling all College of Computing Studies alumni and students! Don&apos;t miss HIMUGSO, the department of College of Computing Studies event, happening at Saint Columban College, Pagadian City from March 27 to April 1, 2023. Our theme is &quot;Ang pag-edukar sa mga kabatan-onan sa teknolohiya sa atong modernong katilingban para sa umaabot na panahon&quot; with an Intergalactic motif. Join us as we explore the latest trends and innovations in computing studies and experience a world of space exploration and technology. See you there! </p>
        </div>
      </div>
    </div>
  );
}
