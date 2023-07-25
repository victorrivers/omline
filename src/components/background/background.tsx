import Image from "next/image";
import styles from "./background.module.scss";

export function Background(): JSX.Element {
	return (
		<div className={styles.background}>
			<Image src="/mist.gif" alt="Mist" priority fill />
		</div>
	);
}
