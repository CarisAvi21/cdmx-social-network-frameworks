import React, {Component} from 'react';
import fire from '../config/Fire';
import Posts from './Posts'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
            return (
                < div >
                    <h1> Bienvenido a tu muro 
                    </h1>
                    <button onClick={ this.logout } > Cerrar Sesión 
                    </button>
                    <Posts />
                </div>);

    }

}

export default Home;