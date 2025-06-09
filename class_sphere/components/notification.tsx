
import { BsList } from "react-icons/bs";
export const Notifications = () =>{
    return (
    
        <div className='text-black'>
             {/* Notifications */}
     <h2 className="text-xl font-semibold mb-4">Notifications</h2>
     <ul className="list-disc list-inside space-y-2">
       <li>Upcoming Event: PTA Meeting on Friday</li>
       <li>3 Payments Due This Week</li>
       <li>1 Disciplinary Case Flagged </li>
     </ul>
   </div>
 )   
}
export default Notifications;
