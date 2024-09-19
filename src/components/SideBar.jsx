import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of citeis</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Onc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
