import {Link} from 'react-router-dom';


export function Home(){
    return (
        <div style={{textAlign : "center"}}>
        <h1 >What do you want to try today?</h1>
        <Link to="/Quotes">Quotes</Link>
        </div>
    )
}