import React from 'react'

function App() {
  return (
    <div className="Welkome">
      <h1>
        Amber Cinema
      </h1>
      <br/>
      <div className="Welkome_content">
        <h2> All endpoints </h2>
        <br/>
        <div className="btns">
          <a href="https://serene-island-73390.herokuapp.com/api/film/get?offset=10&limit=20">
            paginate
          </a>
          <a href="https://serene-island-73390.herokuapp.com/api/film/get/5">
            get by id 
          </a>
          <a href="https://serene-island-73390.herokuapp.com/api/film/get-all">
            get all 
          </a>
          <a href="https://serene-island-73390.herokuapp.com/api/film/search?query='test'">
            search by query
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
