import './EventHandling.css';

function Event(props){
   function display(message){
    alert(message);
    }
    function displayEvents(m,e){
        alert(m);
        console.dir(e.target);
        console.log("Event type ",e.type);
    }
    return (
        <>
        <h2>{props.children}</h2>
        <button className='btn btn-outline-primary'   onClick={display}>Button</button>
        <button  className='btn btn-outline-danger' onClick={()=>{display("Button clicked")}}>Button</button>
        <button className='btn btn-outline-success' onClick={(e)=>{displayEvents("Button clicked",e)}}>Button</button>
        </>
    )
}


export default Event