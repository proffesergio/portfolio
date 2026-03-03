import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="text-align: text-center">
      <h2 className="text-3xl sm:text-2xl font-semibold mb-14 text-gray-600 self-start">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
