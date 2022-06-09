import type { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
import styles from "../../styles/Home.module.scss";

// create a json array for definition of languages 
// each array object will be titled the respective name of language 
// json array will have a boolean for the checkbox 

const SearchForm: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const jishoAddress: string = "https://jisho.org/search/";
  const naverAddress: string = "https://en.dict.naver.com/#/search?query=";
  const mandarinSpot_1: string = "https://mandarinspot.com/dict?word=";
  const mandarinSpot_2: string = "&phs=pinyin&sort=rel";

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
            <iframe className={styles.iStyle} src={jishoAddress + query} />
          </div>
          <div className={styles.gridWrapper}>
            <iframe className={styles.iStyle} src={naverAddress + query} />
          </div>
          <div className={styles.gridWrapper}>
            <iframe
              className={styles.iStyle}
              src={mandarinSpot_1 + query + mandarinSpot_2}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchForm;
