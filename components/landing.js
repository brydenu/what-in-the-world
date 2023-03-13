import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./landing.module.css";

export default function Landing() {
    const [inputVal, setInputVal] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        router.push(`${inputVal}`);
    }
    return (
        <div className={styles.container}>
            <div className={styles.bg} />
            <div className={styles.content}>
                <header><h1 className={styles.header}>What in the World</h1></header>
                <form className={styles.form} onSubmit={handleSearch}>
                    <input className={styles.searchbar} value={inputVal} onChange={(e) => setInputVal(e.target.value)} ></input>
                    <button className={styles.searchbutton} type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}