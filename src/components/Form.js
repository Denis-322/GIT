import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="rep" placeholder="Репозиторий"/>
                <button>Получить репозитории</button>
            </form>
        );
    }
}
export default Form;