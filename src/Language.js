
import * as React from 'react';
import { useState, useEffect } from "react";






const Language = () => {
	const searchL = "https://restcountries.com/v3.1/language/"
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
	const fetchCountryLanguage = async() => {
		const response = await fetch(searchL)
		const data = response.json()
		console.log(data)
	}

	return (

		

		<div>
			<div>
				<h1>THIS IS CURRENCY PAGE</h1>
			</div>
			<input className='form-control' onChange={handleSearch} value={search} />
			<button onClick={searchButton} className="btn btn-dark p-3 fw-v=bold">Find Language</button>
			
			<div>

			</div>
		</div>

	)
}

export default Language;