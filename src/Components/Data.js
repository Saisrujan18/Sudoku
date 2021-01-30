import react,{ useState}  from 'react';
import "./Grid.css";
import "../ALLCSS.css";
// import { findAllByDisplayValue } from '@testing-library/react';

function Data()
{
    const [sudoku,UpdateSudoku] = useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const [final,UpdateFinal]= useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    const axios =require('axios');
    const [correct,UpdateCorrect]=useState(0);
    const [answer,UpdateAnswer]= useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
    function Easy()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=easy'
        })
        .then(res =>
            {
                console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
                UpdateCorrect(0);
            })
        .catch(err =>console.error(err));



        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => 
        Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');
        
        var board=[];
        for(var i=0;i<9;i++)
        {
            board=[...board,sudoku[i]];
        }
        var data={board};
        
        // axios
        //     .post('https://sugoku.herokuapp.com/solve', {data})
        //     // .then(response => response.json())
        //     .then(response => console.log(response))
        
        //     .catch(console.warn)
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => response.json())
        .then(response => {
            // for(var i=0;i<9;i++)
            // {
            //     // console.log(response.solution[i]);
            //     ans=[...ans,response.solution[i]];
            //     // console.log(ans);
            // }
            // // console.log(ans);
            UpdateAnswer(response.solution);
        })
        .catch(console.warn)
    }
    function Medium()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=medium'
        })
        .then(res =>
            {
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
                UpdateCorrect(0);
            })
        .catch(err =>console.error(err));



        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => 
        Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');
        
        var board=[];
        for(var i=0;i<9;i++)
        {
            board=[...board,sudoku[i]];
        }
        var data={board};
        
        // axios
        //     .post('https://sugoku.herokuapp.com/solve', {data})
        //     // .then(response => response.json())
        //     .then(response => console.log(response))
        
        //     .catch(console.warn)
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => response.json())
        .then(response => {
            // for(var i=0;i<9;i++)
            // {
            //     // console.log(response.solution[i]);
            //     ans=[...ans,response.solution[i]];
            //     // console.log(ans);
            // }
            // // console.log(ans);
            UpdateAnswer(response.solution);
        })
        .catch(console.warn)
	}
    function Hard()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=hard'
        })
        .then(res =>
            {
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
                UpdateCorrect(0);
            })
        .catch(err =>console.error(err));



        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => 
        Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');
        
        var board=[];
        for(var i=0;i<9;i++)
        {
            board=[...board,sudoku[i]];
        }
        var data={board};
        
        // axios
        //     .post('https://sugoku.herokuapp.com/solve', {data})
        //     // .then(response => response.json())
        //     .then(response => console.log(response))
        
        //     .catch(console.warn)
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => response.json())
        .then(response => {
            // for(var i=0;i<9;i++)
            // {
            //     // console.log(response.solution[i]);
            //     ans=[...ans,response.solution[i]];
            //     // console.log(ans);
            // }
            // // console.log(ans);
            UpdateAnswer(response.solution);
        })
        .catch(console.warn)
    }
    function Random()
    {
    	axios({
        	method:'get',
            url:'https://sugoku.herokuapp.com/board?difficulty=random'
        })
        .then(res =>
            {
                console.log(res.data.board);
                UpdateSudoku(res.data.board);
                UpdateFinal(res.data.board);
                UpdateCorrect(0);
            })
        .catch(err =>console.error(err));



        const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
        const encodeParams = (params) => 
        Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');
        
        var board=[];
        for(var i=0;i<9;i++)
        {
            board=[...board,sudoku[i]];
        }
        var data={board};
        
        // axios
        //     .post('https://sugoku.herokuapp.com/solve', {data})
        //     // .then(response => response.json())
        //     .then(response => console.log(response))
        
        //     .catch(console.warn)
        fetch('https://sugoku.herokuapp.com/solve', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(response => response.json())
        .then(response => {
            // for(var i=0;i<9;i++)
            // {
            //     // console.log(response.solution[i]);
            //     ans=[...ans,response.solution[i]];
            //     // console.log(ans);
            // }
            // // console.log(ans);
            UpdateAnswer(response.solution);
        })
        .catch(console.warn)
	}
    function Update(event)
    {
        const idef=event.target.id;
        const va=event.target.value;
        const row= (    (   idef-(idef%10)   )/10   )  -1;
        const col=idef%10-1;
        var temp=[];
        for(var i=0;i<9;i++)
        {
            if(i==row)
            {
                var verytemp=[];
                for(var j=0;j<9;j++)
                {
                    if(j==col)
                    {
                        verytemp=[...verytemp,va];
                    }
                    else
                    {
                        verytemp=[...verytemp,final[i][j]];
                    }
                }
                temp=[...temp,verytemp];
            }
            else
            {
                temp=[...temp,final[i]];
            }
        }
        // temp[row][col]=va;
        UpdateFinal(temp);
    }
    function view(props)
    {
        if(props==0)
        {
            return "";
        }
        return props;
    }
    function indir(props)
    {
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
            <input type="tel"  className={ce} id={ide} value={indir(sudoku[i][j])} onChange={Update} disabled></input>
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
        var sofar=true;
        for(var i=0;i<9;i++)
        {
            for(var j=0;j<9;j++)
            {
                if(final[i][j]==answer[i][j] || final[i][j]==answer[i][j].toString())
                {
                    continue;
                }
                else
                {
                    sofar=false;
                    break;
                }
            }
            if(sofar==false)break;
        }
        if(sofar==true)
        {
            UpdateCorrect(1);
        }
        else{
            UpdateCorrect(2);
        }
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
    function Result(props)
    {
        if(props==0)
        {
            return(<p>{""}</p>)
        }
        else if(props==1)
        {
            return(<p className="correct">YOU HAVE DONE IT !</p>)
        }
        else
        {
            return(<p className="wrong">TRY AGAIN !</p>)
            // return(<p className="correct">YOU HAVE DONE IT !</p>)
        }
    }
    return (
            <div>
                 {Result(correct)}
                {show()}
                <div className="button">
                <button onClick={Easy} className="buttons">Easy</button>
                <button onClick={Medium} className="buttons">Medium</button>
                <button onClick={Hard} className="buttons">Hard</button>
                <button onClick={Random} className="buttons">Random</button>
                </div>
                <button onClick={Submit} className="buttons submitButton">Submit</button>
            </div>
            )
}

export default Data;