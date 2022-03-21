import "./SortAndFilterButtons.css"

export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button className="sortByTitleAsc">Sort by Title Asc</button>
      <button className="sortByTitleDesc">Sort by Title Desc</button>
      <button className="sortByPriceAsc">Sort by Price Asc</button>
      <button className="sortByPriceDesc">Sort by Price Desc</button>
    </div>
  );
};
