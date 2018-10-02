import React, { Component } from 'react';
import Movie from './Movie';
class Catalog extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            budget: 3
        }
    }
    increaseBudget=()=>{
        let newBudget = this.state.budget+3;
        this.setState({budget: newBudget})
        console.log("budget increased");
    }
    decreaseBudget=()=>{
        let newBudget = this.state.budget-3;
        this.setState({budget: newBudget})
    }
    render() {
        let rentedCatalog = this.props.catalog.filter(m=>m.isRented===true);
        let areAnyRented = rentedCatalog.length;
        let catalog = this.props.catalog;

        return (
            <div>

                <div>{this.props.title}</div>
                <div>
                    {catalog.map(c =>
                        <Movie movieData={c} changeRentalStatus={this.props.changeRentalStatus} budget={this.state.budget} increaseBudget={this.increaseBudget} decreaseBudget={this.decreaseBudget}/>
                    )}
                </div>

            </div>
        )

    }
}



export default Catalog