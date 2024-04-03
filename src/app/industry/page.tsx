import styles from './Industry.module.css';

export default function ResearchFest() {
    return (
        <div className={styles.container}>
            <h1>Studio Pinya</h1>
            <div className={styles.gallery}>
                <div className={styles.imageContainer}>
                    <img src="/path-to-your-image-1.jpg" alt="Description Image 1" className={styles.image} />
                    <p className={styles.description}>Description for image 1</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/path-to-your-image-2.jpg" alt="Description Image 2" className={styles.image} />
                    <p className={styles.description}>Description for image 2</p>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/path-to-your-image-3.jpg" alt="Description Image 3" className={styles.image} />
                    <p className={styles.description}>Description for image 3</p>
                </div>
            </div>
        </div>
    );
}
