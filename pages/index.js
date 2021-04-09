import Head from 'next/head'
import { useEffect, useState } from "react";
import { Brightness6Rounded } from "@material-ui/icons";
import styles from '../styles/Home.module.css'




export default function Home() {
  //here we have a state for to deside which theme have to display
  const [theme, setTheme] = useState("light");
  //here we have a state for to keep track of how many times the button has been clicked
  const [count, setCount] = useState(0);

  // here we have a useEffect to deside when to run this code 
  useEffect(() => {
    // so here we save the theme in localStorage to keep track of the last theme so has been used after refrshing.
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    // and here we update the localStorage by saving the last theme (dark or light)...
    setTheme(localStorage.getItem("theme"));
    // by including the dependencies array we saying run this code once and when ever the theme changes.
  }, [theme]);

   //here is our helper function some are risponsbale for switch the theme
  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };
  //here is our helper function some are risponsbale for saving the theme on localStorage
  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

   //here is our helper function some are risponsbale for counting the clicks
  const counter = () => { 
    setCount(count + 1);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Dark and light mode </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>You have clicked me  { count } times</h1>
      {/* here i learned something new by including more than one function in the same onClick  */}
      <button className={styles.themeSwitcher} onClick={() => { counter(); switchTheme(); }}>
       click me to change the theme < Brightness6Rounded />
      </button>
      <p>Your {theme} mode is on now.</p>
    </div>
  )
}
