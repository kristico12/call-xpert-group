// dependencies
import React, {Component, Fragment} from "react";
import {ProgressBar, Card, Table, Icon} from "react-materialize";

// utils
import {CallJson} from '../utils/callJson';
import {API_URL} from '../utils/constans';

class Qualification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            qualification: {},
        }
    }

    componentDidMount() {
        CallJson(`${API_URL}/api/qualification`, 'GET')
            .then(data => {
                const results = data.results.slice();
                results.unshift({'name': '', 'total_count': 'Numero repeticiones', "total_point": 'Total puntos'})
                data['results'] = results.slice();
                this.setState({
                    qualification: data,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    showInfo() {
        const arrayStars = [];
        for(let i = 1; i <= this.state.qualification.stars; i++) {
            arrayStars.push(i);
        }
        return (
            <Card
                className="#fffde7 yellow lighten-5"
                textClassName="black-text"
                title="Calificaciones"
            >
                <Table responsive centered>
                    <thead>
                    <tr>
                        {
                            this.state.qualification.results.map(item => (
                                <td key={item.name}>{item.name}</td>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            this.state.qualification.results.map(item => (
                                <td key={item.total_count}>{item.total_count}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            this.state.qualification.results.map(item => (
                                <td key={item.total_point}>{item.total_point}</td>
                            ))
                        }
                    </tr>
                    </tbody>
                </Table>
                <br/>
                <h5>Total Archivos Leidos: {this.state.qualification.count_files}</h5>
                <h5>Puntaje Total: {this.state.qualification.total_points}</h5>
                {
                    arrayStars.map(item => <Icon>stars</Icon>)
                }

            </Card>
        )
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.loading ?
                        <ProgressBar/>
                        :
                        <Fragment>
                            {
                                Object.keys(this.state.qualification).length > 0 ?
                                    <Fragment>
                                        {
                                            this.state.qualification.hasOwnProperty('count_files') && this.state.qualification.count_files > 0 ?
                                                this.showInfo()
                                                :
                                                <h1>No hay archivos a procesar...</h1>
                                        }
                                    </Fragment>
                                    :
                                    <h1> A Ocurrido un Error, Por favor intenta mas tarde</h1>
                            }
                        </Fragment>
                }
            </Fragment>
        );
    }
}

export default Qualification;