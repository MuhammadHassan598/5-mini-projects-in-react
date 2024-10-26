import "./TicketNum.css"
export default function TicketNum({ num }) {


    return (
        <>
            <div>
                <span className="TicketNum">
                    {num}
                </span>
            </div>
        </>
    )
}