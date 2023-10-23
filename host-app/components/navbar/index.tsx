import React from "react";
import styles from "../navbar/styles.module.css"

const Navbar = () => {
  return (  
    <div className={`${styles.div}`}>
      <p>Este é um navbar localizado em Host App</p>
    </div>
  );
};

export default Navbar;