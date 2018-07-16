import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>

                        <tr >
                            <td>lp</td>
                            <td>sys</td>
                            <td>dia</td>
                            <td>pulse</td>
                            <td>date</td>

                        </tr>
                        {this.props.records.map(function (item, key) {

                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                </tr>
                            )

                        })}</tbody>
                </table>
            </div>

        );
    }
}

export default Output;