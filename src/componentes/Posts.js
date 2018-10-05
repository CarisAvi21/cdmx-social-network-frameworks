import React, {Component} from 'react';


class Posts extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <form className="col-8">
             <div className="form-group">
                <label>Escribe tu comentario</label>
                <textarea className="form-control" placeholder="¿Cómo esta tu mascota hoy?"></textarea>
             </div>
                <button type="submit" className="btn btn-primary">Publicar</button>
            </form>
        );
    }
}

export default Posts;