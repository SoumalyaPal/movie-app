import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            price:199,
            rating:8.9,
            stars:0
        }
        //this.addStars=this.addStars.bind(this);
    }
    addStars = () => {
        if(this.state.stars === 5){
            return;
        }
        // form 1
        this.setState({
            stars: this.state.stars +0.5
        });

        // form 2
        // this.setState((prevState) => {
        //     return{
        //         stars: this.prevState.stars+0.5
        //     }
        // });
        
        // this.state.stars += 0.5;
        // console.log("this: ", this);
    }
    removeStars = () => {
        if(this.state.stars <= 0){
            return;
        }
        this.setState({
            stars: this.state.stars -0.5
        });
    }
    render(){
        const {title,plot,price,rating,stars} = this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                    onClick={this.removeStars}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={this.addStars} 
                                />
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;