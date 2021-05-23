import { Link } from 'react-router-dom';

function Options(props) {
  return (
    <>
      <div className="selectJob">
        <div className="btn-group dropright">
          <span
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              font: `normal normal bold 23px/42px Lato`,
              color: `#576575`,
              opacity: `1`,
              cursor: `pointer`,
            }}
          >
            Jobs
          </span>

          <div
            className="dropdown-menu"
            style={{
              top: `9px`,
              borderRadius: '13px',
              background: '#519efc',
            }}
          >
            <Link to="/JobCategories" className="dropdown-item">
              Job categories
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="/JobLocations" className="dropdown-item">
              Job locations
            </Link>
            <div class="dropdown-divider"></div>

            <Link to="/JobApplications" className="dropdown-item">
              Job applications
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="/jobBoard" className="dropdown-item">
              Job on board
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="/Skills" className="dropdown-item">
              Skills
            </Link>
          </div>
          <label style={{ marginTop: '35px', marginLeft: '-53%' }}>
            {props.JobLink}
          </label>
        </div>
      </div>
    </>
  );
}

export default Options;
