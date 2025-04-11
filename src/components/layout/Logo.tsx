import React from "react";
import { Rocket } from "lucide-react";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Rocket className="h-6 w-6 text-blue-600" />
      <span className="font-bold text-xl text-blue-900 dark:text-blue-100">
        StartHub
      </span>
    </div>
  );
};

export default Logo;
