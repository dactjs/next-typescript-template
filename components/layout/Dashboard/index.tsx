import styles from './Dashboard.module.css';

export const Dashboard: React.FC = ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <strong>Logo</strong>
    </header>

    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>

    <div className={styles.content}>{children}</div>
  </div>
);

export default Dashboard;
