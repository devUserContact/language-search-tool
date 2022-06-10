import type { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
import languages from "../../assets/languages.json";
import styles from "../../styles/Home.module.scss";

const SearchForm: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setQuery(searchTerm);
  };
  return (
    <>
      <h1 className={styles.title}>language search tool</h1>
      <p></p>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <form onSubmit={submit}>
            <input
              className={styles.input}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="searchTerm"
              placeholder="enter a word"
            />
            <button className={styles.button} type="submit">
              search
            </button>
            <input type="checkbox"></input>
          </form>
        </div>
      </div>
      <p></p>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridWrapper}>
            <iframe
              className={styles.iStyle}
              src={languages.japanese.url + query}
            />
          </div>
          <div className={styles.gridWrapper}>
            <iframe
              className={styles.iStyle}
              src={languages.korean.url + query}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchForm;
