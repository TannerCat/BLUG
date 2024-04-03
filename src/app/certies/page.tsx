import styles from './Certificates.module.css'; // Make sure to create this CSS module

export default function Certificates() {
  // Correctly assign a single image URL to each certificate
  const certificates = [
    { id: 1, title: 'Certificate 1', imageUrl: '/images/cert1.png' },
    { id: 2, title: 'Certificate 2', imageUrl: '/images/cert2.png' },
    { id: 3, title: 'Certificate 3', imageUrl: '/images/cert3.png' },
    { id: 4, title: 'Certificate 4', imageUrl: '/images/cert4.png' },
    { id: 5, title: 'Certificate 5', imageUrl: '/images/cert8.png' },
    { id: 6, title: 'Certificate 6', imageUrl: '/images/cert6.png' },
    { id: 7, title: 'Certificate 7', imageUrl: '/images/cert7.jpg' },
    { id: 8, title: 'Certificate 8', imageUrl: '/images/cert5.jpg' },
    { id: 9, title: 'Certificate 9', imageUrl: '/images/cert9.jpg' },
    { id: 10, title: 'Certificate 10', imageUrl: '/images/cert10.jpg' } // Ensure you have a cert10.jpg or adjust accordingly
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Certificates</h1>
      <div className={styles.certificatesGrid}>
        {certificates.map(({ id, title, imageUrl }) => (
          <div key={id} className={styles.certificate}>
            <img src={imageUrl} alt={title} className={styles.certificateImage} />
            <p className={styles.certificateTitle}>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
