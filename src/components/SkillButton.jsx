import "../styles/skillButton.css";

function SkillButton({
  category,
  currentCategory,
  setCategory,
}) {
  return (
    <button
      className={
        category === currentCategory
          ? "filter-button active"
          : "filter-button"
      }
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  );
}

export default SkillButton;