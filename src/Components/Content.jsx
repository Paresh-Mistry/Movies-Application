import React, { Component } from "react";
import Moviedata from "./Moviedata";

export class Content extends Component {
  // Default data To render
  moviedata = [
    {
      Title: "Maine Pyar Kiya",
      Year: "1989",
      imdbID: "tt0100095",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjFjM2I0YWMtYzY0Yi00ODgyLWJjNzgtN2NlZTBkNGY1NTBiXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg",
    },
    {
      Title: "Hum Hain Rahi Pyar Ke",
      Year: "1993",
      imdbID: "tt0107166",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk5NmU0ZDgtODU5Zi00MTExLTk2MDgtYTg1MDhlMTkwN2Q1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Kuch Rang Pyar Ke Aise Bhi",
      Year: "2016–2021",
      imdbID: "tt5697728",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDZjNjdmM2YtNWM1Ni00MjRhLThjYTYtMjYxMWMwZTk5NWE3XkEyXkFqcGdeQXVyNjIyMjY4OTU@._V1_SX300.jpg",
    },
    {
      Title: "Har Dil Jo Pyar Karega...",
      Year: "2000",
      imdbID: "tt0250415",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjc4NzEwNTAtZjg3OS00NmYwLTg3YjQtOWQ3ZGRjZmI4MTQ4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Afsana Pyar Ka",
      Year: "1991",
      imdbID: "tt0327403",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTIxM2NkNGYtNGU4Zi00M2ZlLTg5NDYtYzA2NzU0MWM1MGVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Mujhe Pyar Hua Tha",
      Year: "2022–",
      imdbID: "tt26455509",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkNWU3Y2MtM2RkNC00ZTY2LTgwZGYtMWM4NDdiM2M4NmU4XkEyXkFqcGdeQXVyNTA4NjMyNjE@._V1_SX300.jpg",
    },
    {
      Title: "Dil Vil Pyar Vyar",
      Year: "2002",
      imdbID: "tt0335044",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmQyZTI5NmYtMzFiOC00NzQ0LWExMWYtY2U0YmU3NTUxMDZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Tamanchey: Pyar Mein Dil Pe Maar De Goli",
      Year: "2014",
      imdbID: "tt2317135",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTBjNWMyZDctZTkwOS00NmQwLTg2YjAtMjViOWQwMTQyOWViXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Hote Hote Pyar Hogaya",
      Year: "1999",
      imdbID: "tt0206020",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAzOTE1NDg5MV5BMl5BanBnXkFtZTcwNTM2ODgzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Silsila Hai Pyar Ka",
      Year: "1999",
      imdbID: "tt0267928",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTVkMTJhN2YtM2FlYy00NzMzLWFhM2MtOGQ0NGUwODk5ZjFiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
  ];

  constructor() {
    super();
    this.state = {
      moviedata: this.moviedata,
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search && this.props.search) {
      await this.fetchMovieData(this.props.search);
    }
  }

  fetchMovieData = async (searchTerm) => {
    try {
      let dataUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=c10f9521`;
      let response = await fetch(dataUrl);
      let data = await response.json();

      if (data.Search) {
        this.setState({ moviedata: data.Search });
      } else {
        console.error("No movies found for the search term.");
        this.setState({ moviedata: this.moviedata });
        console.log(dataUrl);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      this.setState({ moviedata: this.moviedata });
    }
  };

  render() {
    let { cardstyle } = this.props;

    return (
      <div>
        <div>
          <h1>Movies Database</h1>
        </div>

        <div className="row mt-3 mx-auto">
          {this.state.moviedata.length === 0 ? (
            <span>No Data Found</span>
          ) : (
            this.state.moviedata.map((e) => (
              <Moviedata
                key={e.imdbID}
                poster={e.Poster}
                type={e.Type}
                title={e.Title}
                year={e.Year}
                cardstyle={cardstyle}
              />
            ))
          )}
        </div>
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <div
            className="spinner-border text-primary spinner-border-sm"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div>Please wait..</div>
        </div>
      </div>
    );
  }
}

export default Content;
