import { Component } from 'react/cjs/react.development';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', /* link 1 */
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value /* link 3 */
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {
        const { name, salary } = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name="name" /* link 2 */
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                        value={name} /* link 4 */ />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary" /* link 2 */
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        value={salary} /* link 4 */ />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;

// ! link 1 в стэйт мы записываем те переменые которые мы вводим input

// ! link 2 чтобы обработать сразу два инпута нужно им назначить дата отрибуты с названием
// ! переменных в которые мы будем записывать значения импутов. 

// ! link 3 теперь мы можем достучатся до каждого импута с атрибутом name( [e.target.name]) и 
// ! записать туда значение value(e.target.value)

// ? link 4 если мы хотим чтобы реакт компонент ретдарил форму и контролировал ее поведение в
// ? ответ на пользовательский ввод то мы должны добавлять атрибут Value и в него помещать значение 
// ? state (name , salary) теперь сам импут контролируется реактом и он называется 
// ? упровляемым элементом