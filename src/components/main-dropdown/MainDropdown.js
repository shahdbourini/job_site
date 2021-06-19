import { Select } from 'antd';
import { useLocation } from 'react-router-dom';

function MainDropdown(props) {
  const { Option } = Select;
  const location = useLocation();
  return (
    <>
      {location.pathname === '/job_site' && (
        <Select
          showSearch
          style={{
            width: `25%`,
            float: `right`,
            marginRight: `1%`,
            marginTop: '106px',
            //   display: `${props.showSelect}`,
          }}
          placeholder="FILTTER STATUS : ALL "
          optionFilterProp="children"
          onChange={props.onChangeS}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="New York">New York</Option>
          <Option value="London">London</Option>
        </Select>
      )}

      {location.pathname === '/JobLocations' && (
        <Select
          showSearch
          style={{
            width: `25%`,
            float: `right`,
            marginRight: `1%`,
            marginTop: '106px',
            //   display: `${props.showSelect}`,
          }}
          placeholder="FILTTER STATUS : ALL "
          optionFilterProp="children"
          onChange={props.onChangeS}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="New York">New York</Option>
          <Option value="London">London</Option>
          <Option value="Palestine">Palestine</Option>
          <Option value="Nablus">Nablus</Option>
        </Select>
      )}
      {location.pathname === '/job-site' && (
        <Select
          showSearch
          style={{
            width: `25%`,
            float: `right`,
            marginRight: `1%`,
            marginTop: '106px',
            //   display: `${props.showSelect}`,
          }}
          placeholder="FILTTER STATUS : ALL "
          optionFilterProp="children"
          onChange={props.onChangeS}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="cat1">cat1</Option>
          <Option value="cat2">cat2</Option>
          <Option value="cat3">cat3</Option>
          <Option value="cat4">cat4</Option>
        </Select>
      )}

      {location.pathname === '/Skills' && (
        <Select
          showSearch
          style={{
            width: `25%`,
            float: `right`,
            marginRight: `1%`,
            marginTop: '106px',
          }}
          placeholder="FILTTER STATUS : ALL "
          optionFilterProp="children"
          onChange={props.onChangeS}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="skill1">skill1</Option>
          <Option value="skill2">skill2</Option>
          <Option value="skill3">skill3</Option>
          <Option value="skill4">skill4</Option>
        </Select>
      )}
    </>
  );
}

export default MainDropdown;
