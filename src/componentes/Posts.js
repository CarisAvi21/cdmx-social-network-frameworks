import React, {Component} from 'react';
// import fire from '../config/Fire';
// import Posts from './Posts';
// import axios from 'axios';


class Posts extends Component {

    entradaRef = React.createRef();

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }
    crearPost = (e) =>{
        e.preventDefault();

        const post = {
            body : this.entradaRef.current.value,
            uderId: []
        }

        this.props.crearPost(post);

    }

    render() {
        return (
            <form onSubmit={this.crearPost} className="col-8">
             <div className="form-group">
                <label>Escribe tu comentario</label>
                <textarea className="form-control" ref={this.entradaRef} placeholder="¿Cómo esta tu mascota hoy?"></textarea>
             </div>
                <button type="submit" className="btn btn-primary">Publicar</button>
            </form>
        );
    }
}

export default Posts;