import Image from 'next/image';

interface CategoryItemProps {
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryItem({ icon, isSelected, onClick }: CategoryItemProps) {
  return (
    <button
      className={`category-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt="Category icon"
        width={32}
        height={32}
        className="category-icon"
      />
    </button>
  );
} 