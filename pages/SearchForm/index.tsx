import type { NextPage } from "next";
import React from "react";
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
  class SearchTermIframe extends React.Component {
    render() {
      if (query != "" && query == searchTerm) {
        return (
          <div className={styles.container}>
            <div className={styles.grid}>
              {languages.map((language: any, i) => {
                return (
                  <iframe
                    className={styles.iStyle}
                    src={language.url + query}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        );
      } else {
        return <></>;
      }
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
          </form>
        </div>
      </div>
      <p></p>
      <SearchTermIframe />
    </>
  );
};
export default SearchForm;
