import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import Form from "./components/form/Form";
import Displaylink from "./components/displayLink/DisplayLink";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";
import { useEffect, useState } from "react";

const graphqlQuery = {
  query: `
    query {
      getAllLinks { link slug id}
    }
  `,
};

const DUMMY_DATA = [
  {
    link: "google.com",
    slug: "http://localhost:3001/testsl",
    id: 1,
  },
  {
    link: "google.com",
    slug: "http://localhost:3001/testsl",
    id: 2,
  },
];

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((response) => response.json())
      .then((result) => setLinks(result.data.getAllLinks))
      .catch((err) => console.log("There was an error ", err));
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      <Form />
      {links.map((link) => (
        <Displaylink key={link.id} link={link.link} slug={link.slug} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
