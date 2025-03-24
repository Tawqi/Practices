import { useState, useEffect } from "react";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      if (!response.ok) throw new Error("Failed to fetch orders");

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Toggle order status
  const toggleOrder = async (id, e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, completed: !order.completed } : order
      );
      setOrders(updatedOrders); // Update UI first

      await fetch(`http://localhost:5000/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: !orders.find((order) => order.id === id).completed,
        }),
      });
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  // Delete an order
  const deleteOrder = async (id, e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id)); // Remove from UI

      await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Orders Dashboard</h1>

      {/* Show message if no orders */}
      {orders.length === 0 ? (
        <p className="mt-4 text-center text-gray-500 text-lg">No orders yet</p>
      ) : (
        <table className="w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">#</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Size</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Completed</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{order.name}</td>
                <td className="border p-2">{order.size}</td>
                <td className="border p-2">{order.phone}</td>
                <td className="border p-2 text-center">
                  <input
                    type="checkbox"
                    checked={order.completed || false}
                    onChange={(e) => toggleOrder(order.id, e)}
                  />
                </td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={(e) => deleteOrder(order.id, e)}
                  >
                    Delete ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
