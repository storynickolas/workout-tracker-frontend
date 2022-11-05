import React, { useEffect, useState } from 'react';


function Day() {
  const [options, setOptions] = useState([])
  const [page, setPage] = useState(1)
  const [workOut, setWorkOut] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/${page}`)
      .then((r) => r.json())
      .then((data) => setWorkOut(data))
  }, [page])

  useEffect(() => {
    fetch(`http://localhost:9292/workout`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
  }, [page])


  function handleSelect(e) {
    e.preventDefault();
    let newState = options[e.target.value - 1].exercises
    setWorkOut(newState)
  }

  return (
    <div>
      <select onChange={handleSelect}>
              {
                options.map(abrev => {
                  return (
                    <option key={abrev.id} value={abrev.id}> {abrev.name} </option>
                )
              })
            }
        </select>
        {
          workOut.map((item) => (
            <p key={item.name}>{item.name}</p>
         ))
        }
      {/* <h2>{item.name}</h2>
      <img 
        src={item.image} 
        alt={item.name}
      />
      <button onClick={() => addWish(item)}>
        Add to WishList
      </button> */}
    </div>
  );
}

export default Day;