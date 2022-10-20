import { Component } from 'react/cjs/react.development';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }
    onSearchUpdate = (e) => { /* ссылка поиска 7 */
        const term = e.target.value
        this.setState({ term }) /*ссылка поиска 8 */
        this.props.onUpdateSearch(term) /*ссылка поиска 9 */
    }
    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term} /*ссылка поиска 8 */
                onChange={this.onSearchUpdate} />
        )
    }
}

export default SearchPanel;

// ссылка поиска 7 создем метод
// ссылка поиска 8 это устоновка локального состояния и передаём в value
// /*ссылка поиска 8 */пробрасываем состояние на вверх