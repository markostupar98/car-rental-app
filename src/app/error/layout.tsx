import React from "react";

function ErrorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex bg-slate-400 justify-center items-center">
      {children}
    </div>
  );
}

export default ErrorLayout;
