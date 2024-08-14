import '../css/search.css'

export default function({fun,searching,fun2}){
    // search onlive change implementation with debouncing
    function onValueChangeFunction(oEvent){
        if(searching)
            return;
        else{
            // debouncing the search call for 600ms
            window.setTimeout(()=>{
                fun2(true);
                fun(true);
            },600);
        }
    }
    // on Press of home button after rearch to reach to home screen
    function onHomePress(oEvent){
        fun(false);
        fun2(false);
        document.getElementsByClassName('myInput')[0].value = null;
    }
    return(
        <>
            <button className="homeButton" onClick={onHomePress}>Home</button>
            <input className="myInput" type="text" onChange={onValueChangeFunction} placeholder='Live search'/>
            <button type="submit" className="searchButton"></button>
        </>
    );
}