import { Input } from 'antd';
import filter from '../../images/filter.png';

function SearchFilter(props) {
  const { Search } = Input;
  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={props.onSearch}
        style={{
          width: 200,
          float: `right`,
          //   marginRight: `1%`,
        }}
        className="job-search"
      />
      <div
        style={{
          width: `36px`,
          float: `right`,
          background: `#576575`,
          marginRight: `1%`,
          borderRadius: `5px`,
          cursor: `pointer`,
        }}
        onClick={props.showModal}
      >
        <img src={filter} style={{ width: `80%` }} alt="icon-filter" />
      </div>
    </>
  );
}

export default SearchFilter;
