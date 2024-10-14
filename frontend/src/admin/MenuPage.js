import React, { useState } from "react";
import "./Menu.css";
import cholaBhaturaImage from "../Components/Images/chola_bhatura.webp";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("North Indian");
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chola Bhatura",
      price: 50,
      ingredients: "Onion, tomato, flour, etc",
      image: cholaBhaturaImage,
      category: "North Indian",
    },
    // Add more items with categories if needed
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState({
    id: null,
    name: "",
    price: "",
    ingredients: "",
    image: "",
    category: selectedCategory,
  });

  const handleAddItem = () => {
    setModalVisible(true);
    setNewItem({
      id: null,
      name: "",
      price: "",
      ingredients: "",
      image: "",
      category: selectedCategory,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !newItem.name ||
      !newItem.price ||
      !newItem.ingredients ||
      !newItem.image
    ) {
      // Add basic validation
      alert("Please fill in all fields.");
      return;
    }

    if (newItem.id === null) {
      const id = Date.now(); // Generate a unique ID using Date.now()
      setMenuItems([...menuItems, { id, ...newItem }]);
    } else {
      setMenuItems(
        menuItems.map((item) => (item.id === newItem.id ? newItem : item))
      );
    }

    closeModal(); // Close the modal after submission
  };

  const handleUpdateItem = (id) => {
    const itemToUpdate = menuItems.find((item) => item.id === id);
    setNewItem(itemToUpdate);
    setModalVisible(true);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRemoveItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const closeModal = () => {
    setModalVisible(false);
    setNewItem({
      id: null,
      name: "",
      price: "",
      ingredients: "",
      image: "",
      category: selectedCategory,
    });
  };
  console.log(setNewItem);
  return (
    <div className="menu-management">
      <div className="head-menu">
        <div className="headerMenu">
          <button className="add-item-button" onClick={handleAddItem}>
            +Add item
          </button>
        </div>

        <div className="menu-category">
          <select
            className="category-dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="North Indian">North Indian</option>
            <option value="South Indian">South Indian</option>
            <option value="Beverages">Beverages</option>
            <option value="Coldrink">Coldrink</option>
            <option value="Italian">Italian</option>
          </select>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{newItem.id ? "Update Item" : "Add New Item"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={newItem.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={newItem.ingredients}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newItem.image}
                onChange={handleInputChange}
                required
              />
              <select
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
              >
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
                <option value="Beverages">Beverages</option>
                <option value="Coldrink">Coldrink</option>
                <option value="Italian">Italian</option>
              </select>
              <button type="submit">
                {newItem.id ? "Update Item" : "Add Item"}
              </button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="menu-table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Item name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Ingredients</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuItems
            .filter((item) => item.category === selectedCategory)
            .map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                </td>
                <td>Rs.{item.price}</td>
                <td>{item.ingredients}</td>
                <td>
                  <button
                    className="update-button"
                    onClick={() => handleUpdateItem(item.id)}
                  >
                    Update
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuPage;
