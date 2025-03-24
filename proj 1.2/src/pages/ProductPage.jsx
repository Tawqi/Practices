import { useState } from "react";

import bp1 from "../assets/img/blue-panjabi1.jpg";
import bp2 from "../assets/img/blue-panjabi2.jpg";
import bp3 from "../assets/img/blue-panjabi3.jpg";
import bp4 from "../assets/img/blue-panjabi4.jpg";
import NavBar from "../components/NavBar";

function ProductPage() {
  const [formData, setFormData] = useState({
    size: "",
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleOrderSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validate phone number length
    if (formData.phone.length < 11) {
      alert("Phone number must be at least 11 digits!");
      return;
    }

    try {
      const response = await fetch("https://a902-103-174-192-94.ngrok-free.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setFormData({ size: "", name: "", address: "", phone: "", email: "" }); // Reset form
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-row gap-5 m-5">
        {/* Product Images */}
        <div className="imgs flex flex-wrap gap-2 w-[60vw]">
          <img className="w-90 shadow" src={bp1} alt="Blue Panjabi - Front" />
          <img className="w-90 shadow" src={bp2} alt="Blue Panjabi - Side" />
          <img className="w-90 shadow" src={bp3} alt="Blue Panjabi - Back" />
          <img className="w-90 shadow" src={bp4} alt="Blue Panjabi - Close-up" />
        </div>

        {/* Product Details & Order Form */}
        <div className="details flex flex-col gap-5 text-center">
          <h1 className="text-4xl">Blue Premium Panjabi</h1>
          <p>Product Code: 09133</p>
          <p>Price: 3000 Taka</p>

          {/* Order Form */}
          <form className="flex flex-col gap-3 p-4" onSubmit={handleOrderSubmit}>
            <select
              name="size"
              className="text-white bg-black p-2 shadow cursor-pointer"
              value={formData.size}
              onChange={handleChange}
              required
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <input
              name="name"
              className="border p-1"
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => {
                let inputValue = e.target.value;
              
                // Remove special characters except spaces
                inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
              
                // Ensure each word starts with a capital letter
                inputValue = inputValue
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(" ");
              
                setFormData({ ...formData, name: inputValue });
              }}
              required
              pattern="^[A-Z][a-z]{2,}( [A-Z][a-z]{2,})+$"
              title="Enter at full name."
            />
            <input
              name="address"
              className="border p-1"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              title="Please enter your full name"
            />
            <input
              name="phone"
              className="border p-1"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
                // Allow only numbers
                const numericValue = e.target.value.replace(/\D/, "");
                setFormData({ ...formData, phone: numericValue });
              }}
              required
              minLength="11"
              pattern="\d{11,}"
              title="Enter a phone number with at least 11 digits"
            />
            <input
              name="email"
              className="border p-1"
              type="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange} 
            />
            <button
              type="submit"
              className="text-center border p-2 shadow cursor-pointer bg-blue-500 text-white"
            >
              Order now
            </button>
          </form>

          {/* Product Details */}
          <div className="mt-10">
            <h1 className="text-left text-xl font-semibold">Details</h1>
            <ul className="text-left list-disc">
              <li>Striking black design with vivid red embroidery accents</li>
              <li>Rich contrasted collar, placket, and cuffs</li>
              <li>Solid black backdrop adds depth to the expression</li>
              <li>Ultra-fine cotton for year-round comfort</li>
              <li>Relaxed fit for effortless wear</li>
            </ul>
          </div>

          {/* Care Instructions */}
          <div className="mt-10">
            <h1 className="text-left text-xl font-semibold">Care</h1>
            <ul className="text-left list-disc">
              <li>Do not bleach</li>
              <li>Dry clean only</li>
              <li>Do not iron over the label or the buttons</li>
              <li>Do not iron over any embroidered areas</li>
              <li>Iron inside out with low to medium heat</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
