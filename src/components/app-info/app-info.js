import "./app-info.css";

const AppInfo = (props) => {
    const { onTotalEmployees, onTotalIncrease } = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {onTotalEmployees}</h2>
            <h2>Премию получат: {onTotalIncrease} </h2>
        </div>
    )
}

export default AppInfo;