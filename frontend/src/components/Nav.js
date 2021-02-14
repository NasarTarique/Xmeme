import React from "react"
import {useHistory} from "react-router-dom"

// Component for Nav bar

function Nav(){
		const history = useHistory();
		const handleclick = () =>{
				history.push("/home")
		}
		
		return(
				<div className="navbar">
						<h1 onClick={handleclick} className="nav-title"><span>X</span>Meme</h1>
				</div>
		)

}

export default Nav;
