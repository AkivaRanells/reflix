import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Movie extends Component {
    changeRentalStatus = () => {
        console.log(this.props.budget);
        if (this.props.movieData.isRented) {
            this.props.increaseBudget();
            this.props.changeRentalStatus(this.props.movieData.id);
        }else if(this.props.budget-3>=0){
            this.props.decreaseBudget();
            this.props.changeRentalStatus(this.props.movieData.id);
        }else{
            alert("You have insufficient funds");
        }
    }
    render() {
        let link = "/movies/" + this.props.movieData.id;
        let backgroundStyle = {
            backgroundImage: 'url(' + this.props.movieData.img + ')'
        }
        return (
            <div className="movie-container">
                <Link to={link}><div className="movie-img" style={backgroundStyle}></div></Link>
                <div className="add-remove-button">
                    <button onClick={this.changeRentalStatus}>
                        {this.props.movieData.isRented ? "\u2212" : "\u002B"}
                    </button>
                </div>
            </div>
        )

    }
}
export default Movie