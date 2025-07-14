import { Link } from 'react-router-dom';
import logoAgroB2B from '../../assets/images/logoAgroB2B.png';

const Logo = () => {
  return (
    <Link className="mb-5.5 inline-block" to="/">
      <div className="flex items-center">
        <img src={logoAgroB2B} alt="AgroB2B Logo" className="h-12 w-12" />
        <span className="ml-2 text-2xl font-bold text-black dark:text-white">
          AgroB2B Hub
        </span>
      </div>
    </Link>
  );
};

export default Logo; 