import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import useCities from "../hooks/useCities";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No countries yet.." />;

  const countries = cities.reduce((arr, cur) => {
    if (!arr.some((el) => el.country === cur.country))
      return [...arr, { country: cur.country, emoji: cur.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
