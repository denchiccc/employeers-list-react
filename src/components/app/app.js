import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Денис Ю", salary: 100000, increase: true, rise: false, id: 1 },
        { name: "Лариса Б", salary: 10000, increase: false, rise: true, id: 2 },
        { name: "Артем Б", salary: 7000, increase: false, rise: false, id: 3 }
      ],
      term: '',/* сылка поиск 1 */
      filter: ''
    }
    this.maxId = 4;
  }
  onDeleteItem = (id) => { /* уд. 1 ссылка */
    this.setState(({ data }) => {

      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  onCreateUser = (name, salary) => {
    const newUser = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    if (name.length > 3 && salary.length > 3) {
      this.setState(({ data }) => {
        const newData = [...data, newUser]
        return {
          data: newData
        }
      })
    }

  };


  onToggleIncrease = (id) => { /* (п.с) 1 ссылка */
    this.setState(({ data }) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return { ...elem, increase: !elem.increase }
        }
        return elem
      })
    }))
  };


  onToggleRise = (id) => { /* (п.с) 1 ссылка */
    this.setState(({ data }) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return { ...elem, rise: !elem.rise }
        }
        return elem
      })
    }))

  };

  onSearchPanel = (items, term) => { /* сылка поиск 3 */
    if (term.length === 0) {/* сылка поиск 4 */
      return items
    }
    return items.filter(elem => {
      return elem.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => { /* ссылка поиска 6 */
    this.setState({ term })
  }


  filterEmployees = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(elem => elem.rise);
      case 'moreThen10000':
        return items.filter(elem => elem.salary > 10000);
      default:
        return items
    }
  }
  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state /* сылка поиск 2 */
    const onTotalIncrease = data.filter(elem => elem.increase).length
    const onTotalEmployees = data.length
    const visiblData = this.filterEmployees(this.onSearchPanel(data, term), filter) /* сылка 5 */
    return (
      <div className="app">
        <AppInfo
          onTotalEmployees={onTotalEmployees}
          onTotalIncrease={onTotalIncrease}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/* ссылка поиска 6 */ />
          <AppFilter filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visiblData}
          onDelete={this.onDeleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />
        <EmployeesAddForm
          onCreate={this.onCreateUser} />
      </div>
    );
  }
}

export default App;
// ! уд. 1 ссылка
//  создадим метод который будем прокидывать в пропсах дочерним компонентам
//  прокидываем метод в низ к дочерним компрнентам. Теперь этот метод передается на самый 
//  нижний уровень в компонете и вызывается только по клику

// ! Поднятие сотояние(п.с) 1 ссылка
//  создаём в верхнем компоненте две функции по изменению состояния rise , increase
// один из способов изменить в массиве data у объекта свойство не мутируя его 
// this.setState(({ data }) => {
//   const index = data.findIndex(elem => elem.id === id)
//   const old = data[index];
//   const newUser = { ...old, increase: !old.increase }
//   const newArr = [...data.slice(0, index), newUser, ...data.slice(index + 1)];
//   return {
//     data: newArr
//   }
// })
// ! реализация строки поиска
// сылка поиск 1 создаем строку куда будет записыватся наш текст поиска.
// сылка поиск 2 деструкторизируе строку поиска term
// сылка поиск 3 создаём метод поиска с двумя входящими аргументами 1аргумент массив в
// котором мы будем искать 2аргумент строка по которой мы будем фильтровать массив
// сылка поиск 4 предусмотрим вариант если пользователь в вёл строку а потом удолил
// для этого создадим условие если оно выполнится то мы просто возращаем массив
// если не выполняется тогда фильтруем массив и проверяем name c строкой term
// сылка поиск 5 
// сылка поиск 6 создадим еще метод onUpdateSearch для поднятия состояния term на вверх
// и передаём его в пропсы

// переходим в search-panel.js