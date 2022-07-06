import type { NextPage } from "next";
import styles from "../../styles/Home.module.scss";

const Footer: NextPage = () => {
	return (
		<div>
			<p className={styles.footerText}>
				created by{" "}
				<a href="https://github.com/devUserContact" target="_blank" rel="noreferrer">
					devUserContact
				</a>{" "}
				🐦
			</p>
		</div>
	);
};

export default Footer;
