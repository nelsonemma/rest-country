import * as React from 'react';
import { useState, useEffect } from "react";






const Capital = () => {
	const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const [oneData, setOneData] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

	const searchButton = () => {
        // fetchOneData(search)
        // console.log(oneData)
    }

	return (

		// <div>
		// 	<h1>THIS IS CURRENCY PAGE</h1>
		// </div>

		<div>

			<input className='form-control' onChange={handleSearch} value={search} />
			<button onClick={searchButton} className="btn btn-dark p-3 fw-v=bold">FIND CAPITAL</button>
		</div>

	)
}

export default Capital;