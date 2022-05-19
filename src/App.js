import Form from "./components/form/Form";
import Banner from "./components/Banner/Banner";
import Displaylink from "./components/displayLink/DisplayLink";
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
  const [links, setLinks] = useState(DUMMY_DATA);

  return (
    <div className={styles.app}>
      <Banner />
      <Form />
      {links.map((link) => (
        <Displaylink key={link.id} link={link.link} slug={link.slug} />
      ))}
    </div>
  );
}

export default App;
