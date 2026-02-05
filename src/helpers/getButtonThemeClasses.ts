export const getButtonThemeClasses = (theme: "light" | "dark"): string => {
  return theme === "dark"
    ? "backdrop-blur-md bg-white/30 border-gray-500 hover:bg-white/10 text-gray-200 active:bg-gray-800"
    : "backdrop-blur-md bg-black/10 border-gray-200 hover:bg-black/70 hover:text-white text-gray-800 active:bg-gray-300";
};
