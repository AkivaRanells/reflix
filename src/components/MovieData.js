import React, { Component } from 'react';
class MovieData extends Component {
    render() {
        const movie = this.props.catalog.filter(m => m.id === Number(this.props.match.params.id))[0];
        let backgroundStyle = {
            backgroundImage: 'url(' + movie.img + ')'
        }
        return (
            <div className="movie-data">
                <div> {movie.title}</div>
                <div>{movie.year}</div>
                <div className="movie-container"> <div className="movie-img" style={backgroundStyle}></div></div>
                <div>{movie.descrShort}</div>
            </div>
        )
    }
}
export default MovieData