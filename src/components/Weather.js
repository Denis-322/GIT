import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>

                Weather(Тут выводить ишью)
                <div>{this.props.name}</div>
                <div>{this.props.full_name}</div>
            </div >
        );
    }
}
export default Weather;