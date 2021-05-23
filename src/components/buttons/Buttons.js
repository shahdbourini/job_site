import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Buttons(props) {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/JobApplications' && (
        <Link to="/jobBoard">
          <Button
            type="primary"
            style={{
              marginBottom: 16,
              background: `#509EFC 0% 0% no-repeat padding-box`,
              borderRadius: `6px`,
              opacity: `1`,
              float: `right`,
              marginTop: `107px`,
              marginRight: `10%`,
            }}
          >
            Board View
          </Button>
        </Link>
      )}

      {location.pathname === '/JobTable' && (
        <Link to="/NewJob">
          <Button
            type="primary"
            style={{
              marginBottom: 16,
              background: `#509EFC 0% 0% no-repeat padding-box`,
              borderRadius: `6px`,
              opacity: `1`,
              float: `right`,
              marginTop: `107px`,
              marginRight: `10%`,
            }}
          >
            Create New
          </Button>
        </Link>
      )}
    </>
  );
}

export default Buttons;
