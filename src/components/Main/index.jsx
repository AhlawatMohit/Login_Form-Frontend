import styles from './styles.module.css';


const Main = () => {

const handleLogout = () => {
localStorage.removeItem("token");
window.location.reload();
}

 return (
    <div className={styles.main_container}>
<nav className={styles.navbar}>
<h1>Mohit Ahlawat</h1>
<button className={styles.white_btn} onClick={handleLogout}>
Logout
</button>
</nav>
<div className={styles.main_contant}>
<a href='https://ahlawatmohit.github.io/PortfolioNew/'>Portfolio Live Link</a>
</div>
    </div>
 )
};

export default Main;