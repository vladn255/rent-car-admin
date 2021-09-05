import { Link } from 'react-router-dom';
import { RoutePath } from "../../globals/const";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 NotFound</h1>
      <Link to={RoutePath.MAIN}>
        <span>Go to main page</span>
      </Link>
    </div>
  );
};

export default NotFound;
