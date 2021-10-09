import "./clock2.css";
import moment from "moment";

const Clock2 =() =>{
   
    const dateTime = moment();
    const timeStr = dateTime.format("HH:MM");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");

    let message="";
    if (hour>5 && hour<11 ) message="Morning";
    else if (hour>=11 && hour<17 ) message="Afternoon";
    else if (hour>=17 && hour<21 ) message="Evening";
    else  message="Night";

    return( <div className="clock-container">
        <div className="clock">{timeStr}</div>
        <div>
            <div className="date">{dateStr}</div>
            <div className="day">{dayStr} </div>
        </div>
        
        </div>

    );
};

export default Clock2;