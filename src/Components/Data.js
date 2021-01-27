import react,{ useState}  from 'react';
import "./Grid.css";
import "../ALLCSS.css";
import { findAllByDisplayValue } from '@testing-library/react';

function Data()
{
    const [sudoku,UpdateSudoku] = useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const [final,UpdateFinal]= useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const axios =require('axios');
    const [changes,UpdateChange]=useState("");
    const [elem,evole]=useState("");
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
        // const tempo=sudoku;
        const idef=event.target.id;
        const row= (    (   idef-(idef%10)   )/10   )  -1;
        const col=idef%10-1;
        var temp=final;
        // console.log(temp);
        event.target.value==null?temp[row][col]=null:temp[row][col]=event.target.value;
        // console.log(sudoku);
        // console.log(final);
        UpdateFinal(temp);
        // UpdateSudoku(sudoku);
        // evole(event.target.value);
        // console.log(sudoku);
        // console.log(final);
    }
    function view(props)
    {
        if(props==0)
        {
            return "";
        }
        return props;
    }

    function DIP(i,j)
    {
        var ide=(i+1)*10+(j+1);
        var ce=(j+i*9).toString();
        ce="cell-"+ce;
        if(sudoku[i][j]==0)
        {
            return(
                <input type="tel" className={ce} id={ide} value={view(final[i][j])} onChange={Update}></input>
            )
        }
        else
        {
            return(
                <input type="tel"  className={ce} id={ide} value={sudoku[i][j]} disabled></input>
            )
        }
    }
    function DISPLAY(props)
    {
        return(
            <div>
                {DIP(props,0)}{DIP(props,1)}{DIP(props,2)}
                {DIP(props,3)}{DIP(props,4)}{DIP(props,5)}
                {DIP(props,6)}{DIP(props,7)}{DIP(props,8)}
            </div>
        );
    }
    function Submit()
    {
        console.log(final);
    }
	function show()
    {
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
                {show()}
                <div className="button">
                <button onClick={Easy} className="buttons">Easy</button>
                <button onClick={Medium} className="buttons">Medium</button>
                <button onClick={Hard} className="buttons">Hard</button>
                <button onClick={Random} className="buttons">Random</button>
                </div>
                <button onClick={Submit} className="subm">Submit</button>
                {/* {Result()} */}
            </div>
            )
}

export default Data;