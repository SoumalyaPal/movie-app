import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
                title: 'The Avengers', 
                plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", 
                poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',
                price: 199,
                star: 0,
                fav: false,
                isInCart: false
        } 
  }
  addStars = () => {
    if(this.state.star >= 5){
        return
    }
    //Form 1 of setState() - increasing the star count by 0.5
    this.setState({
        star : this.state.star + 0.5
    })

    //Form 2 of setState() - increasing the star count by 0.5
    /**
    this.setState((prevState) => {
        return {
            star: prevState + 0.5
        }
    })
     */
  }
  decStars = () => {
    if(this.state.star <= 0){
        return
    }
    //form1 of setState
    this.setState({
        star: this.state.star - 0.5
    })
  }
  toggleFav= () => {
    this.setState({
        fav: !this.state.fav
    })
  }
  toggleCart= () => {
    this.setState({
        isInCart: !this.state.isInCart
    })
 }

    render(){
        const {title, plot, poster, price, rating,star,fav,isInCart} =  this.state;
          
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} />
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
                                    onClick={this.decStars}
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
                                <span className="starCount">{star}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                                {fav ? "Un-favourite":"Favourite"}
                            </button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                                {isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;