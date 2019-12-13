import React, { Component } from 'react';

export const UserContext = React.createContext();

export class UserProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessToken: []
        }
    }


    render() {
        return(
            <UserContext.Provider value={{
                accessToken: this.state.accessToken,
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}