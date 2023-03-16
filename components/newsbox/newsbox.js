import styles from "./newsbox.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NewsBox({ data }) {
    const { author, title, url, urlToImage, publishedAt, source: { name }  } = data;
    return (
        <div className={styles.container} key={url}>
            <Link href={url} className={styles.link}>
            <img src={urlToImage} alt={title} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.author}>{author}, {name}</p>
                <p className={styles.published}>{publishedAt}</p>
            </div>
            </Link>
        </div>
    )
}