import React from 'react';

export default class Fetchsoduku extends React.Component
{
    state={
        loading:false,
        sudoku:[[],[],[],[],[],[],[],[],[]]
    };
    async componentDidMount()
    {
        const url="https://sugoku.herokuapp.com/board?difficulty=hard" ;
        const response= await fetch(url);
        const data= await response.json();
        const databoard=data.board;
        this.setState({sudoku:databoard});
        console.log(databoard); 
        console.log(this.sudoku);
    }
    render()
    {
        return (
            <div>
                {this.state.loading?<div>loading</div>:<div>{this.sudoku}</div>}
            </div>
        )
    }
}