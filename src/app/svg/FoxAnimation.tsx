import * as React from "react";
import Fox1 from './1.tsx';
import Fox2 from './2.tsx';
import Fox3 from './3.tsx';
import Fox4 from './4.tsx';
import Fox5 from './5.tsx';
import Fox6 from './6.tsx';


interface Caracteristicas {
  width: number;
  height: number;
  tipo: number;
}

const SvgComponent: React.FC<Caracteristicas> = ({ width, height, tipo }) => (
  <div>
    {tipo === 1 && <Fox1 width={width} height={height} />}
    {tipo === 2 && <Fox2 width={width} height={height} />}
    {tipo === 3 && <Fox3 width={width} height={height} />}
    {tipo === 4 && <Fox4 width={width} height={height} />}
    {tipo === 5 && <Fox5 width={width} height={height} />}
    {tipo === 6 && <Fox6 width={width} height={height} />}
  </div>
);

export default SvgComponent;