
export function Button({ children, className = "", variant = "solid" }: { children: React.ReactNode; className?: string; variant?: "solid" | "outline" }) {
  const baseStyles = "rounded-xl px-4 py-2 font-medium transition-all duration-300";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</button>;
}
