import react,{ useState}  from 'react';
import "./Grid.css";
import "../ALLCSS.css";
import { findAllByDisplayValue } from '@testing-library/react';

function Data()
{
    const [sudoku,UpdateSudoku] = useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const [final,UpdateFinal]= useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const axios =require('axios');

    function Easy()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=easy'
        })
        .then(res =>
            {
                // console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
            })
        .catch(err =>console.error(err));
	}
	function Medium()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=medium'
        })
        .then(res =>
            {
                // console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
            })
        .catch(err =>console.error(err));
	}
	function Hard()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=hard'
        })
        .then(res =>
            {
                // console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
            })
        .catch(err =>console.error(err));
	}
	function Random()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=random'
        })
        .then(res =>
            {
                // console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
            })
        .catch(err =>console.error(err));
    }
    function Update(event)
    {
        const idef=event.target.id;
        const row=idef/10;
        const col=idef%10;
        const temp=final;
        temp[row][col]=event.target.value;
        UpdateFinal(temp);
    }
    function DIP(i,j)
    {
        const option=sudoku[i][j];
        // var I=i.toString();
        // var J=j.toString();
        var ide=(i+1)*10+(j+1)*10;
        var ce=(i+j*9).toString();
        ce="cell-"+ce;
        if(option==0)
        {
            return(
                <input type="tel" className={ce} id={ide} value={final[i][j]} onChange={Update}></input>
            )
        }
        return(
            <input type="tel"  className={ce} id={ide} value={option} disabled></input>
        )
    }
    function DISPLAY(props)
    {
        return(
            <div>
                {DIP(0,props)}{DIP(1,props)}{DIP(2,props)}
                {DIP(3,props)}{DIP(4,props)}{DIP(5,props)}
                {DIP(6,props)}{DIP(7,props)}{DIP(8,props)}
            </div>
        );
    }
    
	function show(props)
    {
        // console.log(props);
        return(
            <div className="MAIN">
                {DISPLAY(0)}  {DISPLAY(1)}  {DISPLAY(2)}
                {DISPLAY(3)}  {DISPLAY(4)}  {DISPLAY(5)}
                {DISPLAY(6)}  {DISPLAY(7)}  {DISPLAY(8)}
            </div>
        );
    }

    return (
            <div>
                <div className="button">
                <button onClick={Easy} className="buttons">Easy</button>
                <button onClick={Medium} className="buttons">Medium</button>
                <button onClick={Hard} className="buttons">Hard</button>
                <button onClick={Random} className="buttons">Random</button>
                </div>
                {show(sudoku)}
            </div>
            )
}

export default Data;