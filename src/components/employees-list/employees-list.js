import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
    const dataElements = data.map(elem => {
        return (<EmployeesListItem {...elem}/* ,name={elem.name} salary={elem.salary} link 1 */ />)
    })
    return (
        <ul className="app-list list-group">
            {dataElements}
        </ul>
    )
}

export default EmployeesList;

// !  link 1 запись эдентична записи при использовании спред оператора