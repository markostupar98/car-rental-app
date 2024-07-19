import React from "react";

interface HeaderProps {
  label: string;
  title: string;
}
function Header({ label, title }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="">{title}</h1>
      <p>{label}</p>
    </div>
  );
}

export default Header;
