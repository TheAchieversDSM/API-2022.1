import React, { Component } from "react";
import Chart from "react-apexcharts";

class Teste extends Component {
    state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                labels: {
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: 'MMM \'yy',
                        day: 'dd MMM',
                        hour: 'HH:mm'
                    }
                }
            }
        },
        series: [
            {
                name: "series-1",
                data: []
            },
            {
                name: "series-2",
                data: []
            }
        ]
    };

    teste = () => {
        const valores = [10, 10, 10, 10, 10, 10, 10, 10]
        const newSeries = []
        this.state.series.forEach((s) => {
            const data =  valores
            newSeries.push({data, name: s.name })

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
                            width="500"
                        />
                        <button onClick={this.teste}>TESTE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teste;