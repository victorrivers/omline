import styles from "./menu.module.scss";

export function Menu() {
	return (
		<>
			<h1 className={styles.menu}>omline</h1>
			<audio controls src="./audio/bell.mp3"></audio>
		</>
	);
}
