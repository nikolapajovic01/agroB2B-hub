import { FC } from 'react';
import logoAgroB2B from '../../assets/images/logoAgroB2B.png';

interface LogoProps {
  color?: 'white' | 'black';
}

const Logo: FC<LogoProps> = ({ color = 'black' }) => (
  <div className="flex items-center">
    <img src={logoAgroB2B} alt="AgroB2B Logo" className="h-12 w-12" />
    <span className={`ml-2 text-2xl font-bold ${color === 'white' ? 'text-white' : 'text-black'} dark:text-white`}>
      AgroB2B Hub
    </span>
  </div>
);

export default Logo; 