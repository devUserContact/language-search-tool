import type { NextPage } from "next";
import { SyntheticEvent, useState, useEffect } from "react";
import { languages } from "../../assets/languages";
import styles from "../../styles/Home.module.scss";

const SearchForm: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  let submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setQuery(searchTerm);
  };
  function searchTermIframes() {
    if (searchTerm != "") {
    }
  }
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
            {languages.map((language, id) => {
              return (
                <>
                  <p>{language.language}</p>
                  <input type="checkbox" key={id} value={language.language} />
                </>
              );
            })}
          </form>
        </div>
      </div>
      <p></p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {languages.map((language: any, i) => {
            return <iframe className={styles.iStyle}key={i} src={language.url + query}/>;
          })}
        </div>
      </div>
    </>
  );
};
export default SearchForm;
