import styles from './Dashboard.module.css';

export const Dashboard: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <strong style={{ margin: 'auto' }}>Header</strong>
    </header>

    <aside className={styles.sidebar}>
      <strong style={{ margin: 'auto' }}>Sidebar</strong>
    </aside>

    <div className={styles.content}>{children}</div>
  </div>
);

export default Dashboard;
