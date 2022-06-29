import React, { Component } from 'react'



export default class Post extends Component {

    state = {
        posts:[],
    }
    /**
     * Cuando el componente esta montado(obtengo datos antes de renderizar la aplicación)
     */
    async componentDidMount() {
       const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
       if(resp.ok){
        const response = await resp.json();
        this.setState({posts: response});
       }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                        return (
                            <div  key={post.id}> 
                                <h3>Post id: {post.id}</h3>
                                <p>Título: {post.title}</p> 
                            </div>
                        )
                    }   
                )}
            </div>
        )
    }
}


