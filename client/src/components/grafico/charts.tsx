import React, { Component } from "react";
import Chart from "react-apexcharts";

class Teste extends Component {
    state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories:["2001","2001","2001","2001","2001","2001","2001","2001","2001","2001"]
            }
        },
        series: [
            {
                name: "Aulas Assistidas",
                data: []
            },
            {
                name: "series-2",
                data: []
            }
        ]
    };

    teste = () => {
        const valores = [10, 15, 14, 1, 10, 10, 10, 10]
        const newSeries = []
        this.state.series.forEach((s) => {
            const data =  valores
            newSeries.push({data, name: s.name })

        })
        this.setState({
            series: newSeries
          })

    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="90%"
                            height="240%"
                        />
                        <button onClick={this.teste}>TESTE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teste;