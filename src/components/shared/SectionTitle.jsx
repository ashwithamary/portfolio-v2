const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 -mb-2"></span>
      </span>
    </h2>
  );
};

export default SectionTitle;