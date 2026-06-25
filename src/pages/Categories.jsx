import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import "../styles/category.css";

const categoryList = [
  { name: "Action", color: "#FF5209", emoji: "🎬" },
  { name: "Comedy", color: "#D7A4FF", emoji: "😂" },
  { name: "Drama", color: "#148A08", emoji: "🎭" },
  { name: "Music", color: "#E61E32", emoji: "🎵" },
  { name: "Sports", color: "#FF6B00", emoji: "⚽" },
  { name: "Thriller", color: "#84C2FF", emoji: "😱" },
  { name: "Fantasy", color: "#6CD061", emoji: "🧙" },
  { name: "Romance", color: "#FF4FA3", emoji: "❤️" },
];

function Categories() {
  const navigate = useNavigate();
  const setCategories = useStore((state) => state.setCategories);

  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }
  };

  const handleContinue = () => {
    if (selected.length < 3) return;
    setCategories(selected);
    navigate("/dashboard");
  };

  return (
    <div className="category-page">
      <div className="category-left">
        <h1 className="logo">Super App</h1>

        <h2>Choose your entertainment category</h2>

        <div className="selected-list">
          {selected.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        {selected.length < 3 && (
          <p className="warning">
            Minimum 3 categories required
          </p>
        )}
      </div>

      <div className="category-right">
        <div className="categories-grid">
          {categoryList.map((item) => (
            <div
              key={item.name}
              onClick={() => toggleCategory(item.name)}
              className={`category-card ${
                selected.includes(item.name) ? "selected" : ""
              }`}
              style={{ background: item.color }}
            >
              <h3>{item.name}</h3>

              <div className="emoji">
                {item.emoji}
              </div>
            </div>
          ))}
        </div>

        <button
          className="continue-btn"
          disabled={selected.length < 3}
          onClick={handleContinue}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Categories;