import React from "react";
import { formatCLP } from "../../utils/commonUtils";

const CardContent = ({ title, artistName, price, children }) => (
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
    <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-300 text-sm mb-2">{artistName}</p>
    <div className="flex justify-between items-center">
      <span className="text-white font-bold">{formatCLP(price)}</span>
      {children}
    </div>
  </div>
);

export default CardContent;
