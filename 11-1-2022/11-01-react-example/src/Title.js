import React from 'react';
// import 'Title.css';

export default class Title extends React.Component {

    constructor(props){
        super();
        this.name =  props.name;

    }
    render (){
        const h1styles = {
            fontSize: '2em',
            color: 'lightblue'
        };
        return (
            // <h1>{this.name}</h1>
            <h1 style={h1styles}> Hello {this.name} !</h1>
        );
    }

}