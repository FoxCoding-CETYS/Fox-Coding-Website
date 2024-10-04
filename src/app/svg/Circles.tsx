import React from 'react';

interface CircleProps {
  color: string;
  radius?: number; // Radio opcional del círculo (por defecto es 50)
  blur?: number; // Desenfoque opcional (por defecto es 10)
}

const BlurredCircle: React.FC<CircleProps> = ({ color, radius = 50, blur = 10 }) => {
  const blurPadding = blur * 2; // Aumenta el tamaño del SVG para evitar bordes cortados

  return (
    <svg width={radius * 2 + blurPadding} height={radius * 2 + blurPadding}>
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation={blur} />
        </filter>
      </defs>
      <circle
        cx={radius + blurPadding / 2} // Ajustar para que el círculo se centre
        cy={radius + blurPadding / 2} // Ajustar para que el círculo se centre
        r={radius}
        fill={color}
        filter="url(#blur)"
      />
    </svg>
  );
};

export default BlurredCircle;