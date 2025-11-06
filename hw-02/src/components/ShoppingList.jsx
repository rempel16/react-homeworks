function ShoppingList({ items }) {
  if (!items || items.length === 0) {
    return <p>List empty</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
