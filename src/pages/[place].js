import NewsBox from "components/newsbox/newsbox";
import styles from "@/styles/place.module.css";
import Image from "next/image";

export async function getServerSideProps(context) {
    const { params } = context;
    const { place } = params;
    const countryRes = await fetch(`https://restcountries.com/v2/name/${place}`);
    const countryJSON = await countryRes.json();
    const newsApiKey = process.env.NEWS_API_KEY;
    const countryName = countryJSON[0].name;
    const newsRes = await fetch(`https://newsapi.org/v2/everything?q=${countryName}&apiKey=${newsApiKey}`);
    const newsJSON = await newsRes.json();
    const news = newsJSON.articles;
    const country = countryJSON[0];
    const data = { news, country }
    return {
        props: { data },
    }
}

export default function Place({ data }) {
    const { country, news } = data;
    console.log(country);
    console.log(news);
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.head}>
                    <div className={styles.title}><h1 className={styles.name}>{ country.name }</h1></div>
                    <Image src={country.flag} width={150} height={100} alt={`Flag of ${country.name}`} className={styles.flag} />
                </div>
                <div className={styles.info}>
                    <div className={styles.population}><b>Population: </b>{ country.population }</div>
                    <div><b>Language(s): </b>{ country.languages.map((l) => (<span>{l.name}</span>)) }</div>
                    <div><b>Region: </b>{ country.region }</div>
                    <div><b>Capital: </b>{ country.capital }</div>
                    <div><b>Currency/Currencies: </b>{ country.currencies.map((c) => (<span>{c.name} ({c.symbol})</span>)) }</div>
                </div>
            </header>
            <div className={styles.newsBoxes}>
                {news.map((story) => (
                    <NewsBox data={story} />
                ))}
            </div>
        </div>
    )
}