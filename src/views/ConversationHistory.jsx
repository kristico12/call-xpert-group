// dependencies
import React, {Component, Fragment} from "react";
import {TextInput, Card, Button, Icon, Preloader} from 'react-materialize';
import M from 'materialize-css';

// utils
import { CallFiles } from '../utils/call';
import { API_URL } from '../utils/constans';

class ConversationHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            loading: false,
            listFiles: [],
        };
    }

    handlefiles(e) {
        this.setState({
            listFiles: e.target.files
        })
    }

    onSubmit() {
        this.setState({
            loading: true
        }, () => {
            if (this.state.listFiles.length === 0) {
                this.setState({
                    loading: false,
                    error: 'Por favor escoger archivos'
                }, () => {
                    M.toast({html: this.state.error}, 5000, 'rounded');
                })
            } else {
                // Uploads Files
                CallFiles(`${API_URL}/api/conversation_history`, this.state.listFiles)
                    .then(success => success.json())
                    .then(() => this.props.history.push('/qualification'))
                    .catch(error => console.log(error))
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="flex-center all-height-col">
                    <Card
                        className="grey lighten-2"
                        textClassName="black-text"
                        title="Añadir Conversacion"
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <TextInput
                                label="File"
                                type="file"
                                label="Add"
                                onChange={(e) => this.handlefiles(e)}
                                multiple
                            />
                            <br/>
                            <Button
                                node="button"
                                style={{
                                    marginRight: '5px'
                                }}
                                waves="light"
                                onClick={() => this.onSubmit()}
                            >
                                Enviar
                                <Icon left>
                                    cloud
                                </Icon>
                            </Button>
                            <Preloader
                                active={this.state.loading}
                                color="blue"
                                flashing={false}
                                size="small"
                            />
                        </form>
                    </Card>
                </div>

            </Fragment>
        );
    }
}

export default ConversationHistory;