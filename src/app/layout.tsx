// app/layout.tsx

import { ReactNode } from 'react';
import Sidebar from './components/sidebar'; // Ensure the path matches the location of your Sidebar component
import styles from './Layout.module.css'; // Ensure this points to your CSS module with the styles

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  // Wrapping the content in a div with a background container class for styling
  return (
    <>
    <div className={styles.backgroundContainer}>
      <header className={styles.header}>
        <img src="/images/scc.png" alt="Company Seal" className={styles.seal} />
        <h1 className={styles.fancyTitle}>SCC OJT BLOG</h1>
      </header>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
    </>
  );
}
