import React from "react";

const DotPattern = ({
                      size = 40,
                      distance = 12,
                      dotRadius = 3
                    }) => {
  const center = size / 2;

  const positions = [
    [center, center],
    [center, center - distance],
    [center + distance, center],
    [center, center + distance],
    [center - distance, center],
  ];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      {positions.map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r={dotRadius} fill="currentColor" className="text-accent"/>
      ))}
    </svg>
  );
};

export default DotPattern;
