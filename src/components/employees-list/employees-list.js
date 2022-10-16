import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
    const dataElements = data.map(elem => {
        const { id, ...elemProps } = elem; /* link 2 */
        return (<EmployeesListItem key={id}  {...elemProps}/* ,name={elem.name} salary={elem.salary} link 1 */ />)
    })
    return (
        <ul className="app-list list-group">
            {dataElements}
        </ul>
    )
}

export default EmployeesList;

// !  link 1 запись эдентична записи при использовании спред оператора
// ! link 2 на этом шаге мы делаем частичную деструкторизацию const { id, ...elemProps } = elem
// ? создаем динамически каждого пользователя с помощью map()
// const EmployeesList = ({ data }) => {
//     const dataElements = data.map(elem => {
//         return (<EmployeesListItem {...elem}