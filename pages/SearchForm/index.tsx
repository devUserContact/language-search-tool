import type { NextPage } from "next";
import React from "react";
import { SyntheticEvent, useState } from "react";
import { languages } from "../../assets/languages";
import styles from "../../styles/Home.module.scss";

const SearchForm: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const selectLanguages = (e: any) => {
    const checked = e.target.checked;
    if (checked) {
      languages.map((language) => {
        if (language.language == e.target.value) {
          language.checked = e.target.checked;
          return languages;
        }
      });
    } else {
      languages.map((language) => {
        if (language.language == e.target.value) {
          language.checked = e.target.checked;
          return languages;
        }
      });
    }
  };
  let submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setQuery(searchTerm);
    setSearched(true);
  };
  class SearchTermIframe extends React.Component {
    render() {
      if ((query != "" && query == searchTerm) || searched == true) {
        setSearched(false);
        return (
          <div className={styles.container}>
            <div className={styles.grid}>
              {languages.map((language: any, i) => {
                if (language.checked === true) {
                  return (
                    <iframe
                      className={styles.iStyle}
                      src={language.url + query}
                      key={i}
                    />
                  );
                }
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
            {languages.map((language, id) => {
              return (
                <>
                  <p>{language.language}</p>
                  <input
                    type="checkbox"
                    key={id}
                    value={language.language}
                    onClick={(e) => {
                      selectLanguages(e);
                    }}
                  />
                </>
              );
            })}
          </form>
        </div>
      </div>
      <p></p>
      <SearchTermIframe />
    </>
  );
};
export default SearchForm;
