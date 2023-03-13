import React from "react";
import Log from "../components/Log";
import Index from "../components/Thread/Index";
import "../styles/Index.css";

import {useContext} from "react";
import {ThemeContext} from "../context/Theme";



export default function Home() {

  const [{theme}] = useContext(ThemeContext);
  //En fonction de si l'utilisateur est connecté ou non => installe un fond d'écran sur la page
  var isUserConnected = sessionStorage.getItem("state");

  return (
    <>
      <section className="home" style={{backgroundColor: "#fd2d01",filter: theme.filter, backgroundImage: isUserConnected ? 'none' : '  "backgroundImage:  linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../images/network.webp")"'}   }>
        <div   className="main">{isUserConnected !== null ? <Index /> : <Log />}
        </div>
        <br />
      </section>
     
    </>
  );
}
