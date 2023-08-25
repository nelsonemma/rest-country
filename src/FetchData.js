import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from "@mui/material";
import { useState, useEffect } from "react";


const api = 'https://restcountries.com/v3.1/all';
const product = "https://dummyjson.com/products"
 
const FetchData = ( ) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const [oneData, setOneData] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchsecondData = async () => {
        const resposne = await fetch(api)
        const data = await resposne.json()
        setData(data)
    }

    const fetchOneData = async (countryName) => {
        const resposne = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await resposne.json()
        // setData(data) 
        setOneData(data)
    }

    const searchButton = () => {
        fetchOneData(search)
        console.log(oneData)
    }

    useEffect(() => {
        fetchsecondData()
    }, []);

    return (
        <div style={{backgroundColor:"gainsboro" , padding: "10px"}}>
            <h1 style={{ width: "100%" , display: "flex", justifyContent: "center"}}>REST COUNTRY</h1>
            <div className="">
                <div>
                    <input className='form-control' onChange={handleSearch} value={search}  style={{marginTop: "40px" }}/>
                    <button style={{marginTop: "10px"}} onClick={searchButton} className="btn btn-dark p-3 fw-v=bold">FIND COUNTRY </button>
                </div>

                <div className='d-flex gap-3 align-items-center justify-content-center flex-wrap'>
                    {oneData.map((item)=> (
                        <div style={{border: "2px solid blue" , boxShadow:" 1px 1px 1px grey"}}>
                            <img src={item.flags.png} alt='' />
                            <div style={{ textAlign:"center"}}> 
                            
                            <p>NAME: {item.name.common}</p>
                            <p> REGION:   {item.region}</p>
                            <p>  POPULATION:   {item.population}</p>
                            </div>


                        </div>
                    ))}
                </div>

                <div style={{marginTop: "100px" }}>
                    <List list={data} />
               </div>
            </div>





        </div>
    )
}

function List({ list }) {
    return (

        <Container style={{ display: "grid ", gridTemplateColumns: "repeat(auto-fit ,minmax(250px , 1fr)", gap: "40px" }}>

            {list.map((item, index) => {
                return (
                    <div key={index}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image={item.flags.png}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                    </Typography>

                                    <Typography variant="body1" color="text.primary">
                                        COUNTRY:  {item.name.common}
                                    </Typography>

                                    <Typography variant="body2" color="text.primary">
                                        REGION:   {item.region}
                                    </Typography>

                                    <Typography variant="body2" color="text.primary">
                                        POPULATION:   {item.population}
                                    </Typography>

                                    <Typography variant="body2" color="text.primary">
                                        CAR SIDE:   {item.car.side}
                                    </Typography>



                                    {/* <Typography variant="body2" color="text.secondary">
                                      OFFICIAL NAME:   {item.official.name}
                                    </Typography> */}

                                    <Typography variant="body2" color="text.secondary">
                                        SUB-REGION:   {item.subRegion}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        START OF WEEK:   {item.startOfWeek}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>



                )


            })}


        </Container>

    )
}
export default FetchData;

// project to work on
//style all of these
// population , name , image , region , carside with icon , official name, subregion, start of the week.