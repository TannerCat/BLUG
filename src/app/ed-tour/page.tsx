// Assuming this is in app/ed-tour.page.tsx or a similar file

import styles from './EdTour.module.css'; // Ensure you create this CSS module

export default function EdTour() {
  const tours = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    imageUrl: `/images/tour${index + 1}.jpg`, // Replace with actual image URLs
    description: `Description for Tour ${index + 1}`, // Replace with actual descriptions
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Educational Tour</h1>
      <div className={styles.toursGrid}>
        {tours.map(({ id, imageUrl, description }) => (
          <div key={id} className={styles.tour}>
            <img src={imageUrl} alt={`Tour ${id}`} className={styles.tourImage} />
            <p className={styles.tourDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
