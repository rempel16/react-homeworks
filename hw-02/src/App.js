import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";
import "./App.css";

function App() {
  const items = ["Milk", "Banana", "Apples"];
  // const items = [];

  const orders = [
    { orderId: 101, status: "in transit" },
    { orderId: 205, status: "delivered" },
    { orderId: 309, status: "processed" },
  ];

  return (
    <div className="App">
      <Greeting name="User" />
      <ShoppingList items={items} />

      <h2>Order status:</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
