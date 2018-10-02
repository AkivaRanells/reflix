import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Landing extends Component{
    render(){
        let users = this.props.users;
        return(
            <div>
                <h1>Who's Watching?</h1>
                <div>
                    {users.map(u=>{
                        let colorStyle = {
                            backgroundColor: u.color,
                        };
                        return(
                            <div className="user-container" style={colorStyle}>
                               <Link to="/catalog"> <div className="text-container">{u.name}</div></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Landing