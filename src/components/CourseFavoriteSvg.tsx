type CourseFavoriteSvgProps = {
  isFavorite: boolean;
  inactiveColor?: string;
};

export default function CourseFavoriteSvg({
  isFavorite,
  inactiveColor = "white",
}: CourseFavoriteSvgProps) {
  const color = isFavorite ? "#D9D9D9" : inactiveColor;

  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.35 15.2583C9.06667 15.3583 8.6 15.3583 8.31667 15.2583C5.9 14.4333 0.5 10.9917 0.5 5.15833C0.5 2.58333 2.575 0.5 5.13333 0.5C6.65 0.5 7.99167 1.23333 8.83333 2.36667C9.675 1.23333 11.025 0.5 12.5333 0.5C15.0917 0.5 17.1667 2.58333 17.1667 5.15833C17.1667 10.9917 11.7667 14.4333 9.35 15.2583Z"
        fill={isFavorite ? color : "none"}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
