// Using CSS modules in app/index.page.tsx

import styles from './Home.module.css'; // Adjust the import path as necessary
import posts from '../app/data/posts';

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <img src={post.imageUrl} alt={post.title} className={styles.postImage} />
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
