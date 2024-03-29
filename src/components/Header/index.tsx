import logo from "../../assets/logo1.png"
import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
    </header>
  )
}