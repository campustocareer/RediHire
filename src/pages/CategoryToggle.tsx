// components/CategoryToggle.tsx
interface CategoryToggleProps {
  selected: string;
  onSelect: (category: string) => void;
  categories: readonly Category[];
}
type Category = "technology" | "business" | "publicServices";

const CategoryToggle: React.FC<CategoryToggleProps> = ({
  selected,
  onSelect,
  categories,
}) => {
  return (
    <div className="flex justify-center py-10 bg-white">
      <div className="flex bg-white rounded-full overflow-hidden shadow-md">
        {categories.map((category) => {
          const isSelected = selected === category;
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`px-8 py-4 text-lg font-semibold transition-colors duration-300 focus:outline-none ${
                isSelected
                  ? "bg-[#FF1616] text-white"
                  : "text-black hover:bg-gray-100"
              }`}
              style={{
                borderRadius:
                  category === "technology"
                    ? "9999px 0 0 9999px"
                    : category === "publicServices"
                    ? "0 9999px 9999px 0"
                    : "0",
              }}
            >
              {category === "publicServices"
                ? "Public Services"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryToggle;
