
import { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [value, setValue] = useState(defaultValue);
  const context = { value, setValue };
  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child as any, { context }))}</div>;
}

export function TabsList({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex gap-2 mb-4 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, context }: any) {
  const isActive = context.value === value;
  return (
    <button
      onClick={() => context.setValue(value)}
      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? "bg-white text-black" : "bg-zinc-800 hover:bg-zinc-700"}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, context, asChild = false }: any) {
  return context.value === value ? (asChild ? children : <div>{children}</div>) : null;
}
