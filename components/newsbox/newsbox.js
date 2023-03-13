import styles from "./newsbox.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NewsBox({ data }) {
    const { author, title, url, urlToImage, publishedAt, source: { name }  } = data;
    return (
        <div className={styles.container} >
            {/* <Image src={urlToImage} width={200} height={300} alt={title} /> */}
            <h3 className={styles.title}><Link href={url}>{title}</Link></h3>
            <p className={styles.author}>{author}</p>
            <p className={styles.published}>{publishedAt}</p>
        </div>
    )
}