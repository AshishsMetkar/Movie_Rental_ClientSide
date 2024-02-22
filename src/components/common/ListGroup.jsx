const ListGroup = (props) => {
  const { items, onSelectItem, selectedItem } = props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
        style={{cursor:"pointer"}}
          className={
            genre.name === selectedItem
              ? "list-group-item list-group-item-action list-group-item-primary active"
              : "list-group-item list-group-item-action list-group-item-light"
          }
          key={genre._id}
          
          onClick={() => onSelectItem(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
