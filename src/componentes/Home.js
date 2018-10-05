import React, {Component} from 'react';
import fire from '../config/Fire';
import Posts from './Posts';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    state = {
        posts: []
    }

    componentDidMount() {
        this.obtenerPosts();
    }

    obtenerPosts = () => {
        axios.get(`https://happy-dog-3240a.firebaseio.com/`)
        .then(res => {

        });
    };

    crearPost = (post) =>{
        axios.post(`https://happy-dog-3240a.firebaseio.com/`, {post})
        .then(res => {
            if(res.status === 201) {
                let postId = {id: res.data.id}
                const nuevoPost = Object.assign({}, res.data.post, postId)
                this.setState(prevState => ({
                    posts: [...prevState.posts, nuevoPost]
                }))
            }
        
        })
        
    }

    render() {
            return (
                < div >
                    <h1> Bienvenido a tu muro 
                    </h1>
                    <button onClick={ this.logout } > Cerrar Sesión 
                    </button>
                    <Posts 
                        crearPost={this.crearPost}
                    />
                </div>);

    }

}

export default Home;