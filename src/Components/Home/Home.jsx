import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import {data} from "../../MOCK_DATA"
import { BookDetailsPage } from "../BookDetailsPage/BookDetailsPage";
import {Link} from "react-router-dom"

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer" style={{ border: "1px solid"}}>
        {console.log(data)}
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {data[0].map((e) => {
          return <BookDetailsPage key={e.id} image={e.image} title={e.title} price={e.price}/>
        })}
      </Main>
    </div>
  );
};