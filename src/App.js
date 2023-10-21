import React, { useEffect, useState } from 'react'
import "./App.css";


const App = () => {

  const [ive, setLive] = useState([]);
  const [search, setSearch] = useState('mumbai')

  const fetchApi = async () => {
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=20ac519b85914119b95aa427644f6ed5`;

    const response = await fetch(url);
    const resjson = await response.json();
    setLive(resjson.articles);

  }

  useEffect(() => {
    fetchApi();
  }, [search])

  return (
    <>
      <div className='nav'>
        <h1 style={{ color: 'white' }}>News <span style={{ color: 'yellow' }}>Live</span></h1>
        <input type='search' onChange={(event) => {
          setSearch(event.target.value)
        }} placeholder='Search...'></input>
      </div>


      {!ive ? (
        <p>no data found</p>
      ) : (
        <>
          {ive.map((e) => {
            return (
              <>
                <div className='cot'>
                  <div className="card multi" key={e.id}>
                    <img src={e.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body cards">
                      <h6 className="card-title">{e.title}</h6>
                      <p className="card-text"> <b>Author :- </b>{e.author}</p>
                      <a href={e.url} class="btn btn-primary">More...</a>
                    </div>
                  </div>
                </div>


              </>
            );
          })}
        </>


      )

      }


    </>
  )

}

export default App