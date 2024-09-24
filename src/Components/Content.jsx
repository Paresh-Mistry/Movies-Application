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
      Actors: "Salman Khan, Bhagyashree",
    },
    {
      Title: "My Father and My Son",
      Year: "2005",
      imdbID: "tt0476735",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzEzMWYyYjEtNmVjZS00YTAyLWIyOTgtMzEzNzQxMTQzZTgwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
      Title: "Seventh Son",
      Year: "2014",
      imdbID: "tt1121096",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxNTg2MDkyN15BMl5BanBnXkFtZTgwNzA3NzY1MjE@._V1_SX300.jpg",
    },
    {
      Title: "Son of the Mask",
      Year: "2005",
      imdbID: "tt0362165",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIxNzA5NzIzOV5BMl5BanBnXkFtZTcwOTc5NzcyMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Son of Saul",
      Year: "2015",
      imdbID: "tt3808342",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWI2MzE3NzUtNDM5OS00MmY3LWEyN2QtOTVjMDNmNzMzMGQ5XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
    },
    {
      Title: "The Good Son",
      Year: "1993",
      imdbID: "tt0107034",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGM4NzAwY2ItYzVhYS00NDg4LTk2MzgtMTVjNjU1N2M4MzdjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
    },
    {
      Title: "Dear Zachary: A Letter to a Son About His Father",
      Year: "2008",
      imdbID: "tt1152758",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2VhZWQzMWEtNjMyNS00ZDM3LThiMjAtZjA4M2YwOTFkNzc4XkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_SX300.jpg",
    },
    {
      Title: "Son of Rambow",
      Year: "2007",
      imdbID: "tt0845046",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM1MjM0ODc5N15BMl5BanBnXkFtZTcwMjMxMDg1MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Son of Batman",
      Year: "2014",
      imdbID: "tt3139072",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    },
    {
      Title: "Son of a Gun",
      Year: "2014",
      imdbID: "tt2452200",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDE1MTIzNzEtNmU0MC00Y2UzLWE4NTgtYmY1YzJlNTFjYWNkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Big Mommas: Like Father, Like Son",
      Year: "2011",
      imdbID: "tt1464174",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzU2MTk5NzkzNV5BMl5BanBnXkFtZTcwMjU5MzgwNA@@._V1_SX300.jpg",
    },
  ];

  constructor() {
    super();
    this.state = {
      moviedata: this.moviedata,
      isLoading: false,
    };
  }

  async componentDidUpdate(prevProps) {
    if (this.props.search && this.props.search !== prevProps.search) {
      this.setState({ isLoading: true });
      await this.fetchMovieData(this.props.search);
      this.setState({ isLoading: false });
    }
  }

  fetchMovieData = async (searchTerm) => {
    try {
      let dataUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=c10f9521`;
      let response = await fetch(dataUrl);
      let data = await response.json();

      if (data && data.Search) {
        const fullMovieDetails = await Promise.all(
          data.Search.map(async (e) => {
            let newdataUrl = `https://www.omdbapi.com/?i=${e.imdbID}&apikey=c10f9521`;
            let newResponse = await fetch(newdataUrl);
            let detailedData = await newResponse.json();
            return {
              ...e,
              Actors: detailedData.Actors,
              Plot: detailedData.Plot,
              Runtime: detailedData.Runtime,
            };
          })
        );

        this.setState({ moviedata: fullMovieDetails });
      } else {
        console.error("No movies found for the search term.");
        this.setState({ moviedata: this.moviedata });
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
        {this.state.isLoading && (
          <div className="d-flex justify-content-center gap-2 align-items-center mt-4">
            <div
              className="spinner-border text-primary spinner-border-sm"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div>Please wait..</div>
          </div>
        )}
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
                actors={e.Actors}
                desc={e.Plot}
                Runtime={e.Runtime}
                cardstyle={cardstyle}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Content;
