import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket( ticket ) {

    console.log(ticket.ticket[0]);
    return (
        <>
            <div className="Ticket">


                 {
                   ticket.ticket[0].map((num, idx) => {
                     return   <TicketNum num={num} key={idx} />

                    })

                } 
            </div>
        </>
    )
}