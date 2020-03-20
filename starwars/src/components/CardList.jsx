import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Container, Row, Col, Button, ButtonGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap'

import CharCard from './CharCard'

// move to a global config
// const cols = { xs: 1, sm: 2, md: 3 }
import './cardlist.css';


const data = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
    ],
    "species": [
        "https://swapi.co/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.co/api/people/2/"
  }
];

function CardList() {

  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(0)

  function getChars(page) {
  
  }
  
  useEffect(() => {

    axios
    .get(`https://swapi.co/api/people/?search=${query}&page=${page}`)
    .then(resp => {
      // if (query != '') {
      //   setChars(resp.data.results.filter(item => {return item.name.includes(query)}))
      // }
      // else {
      //   setChars(resp.data.results)
      //   setCount(resp.data.count)
      // }
      setChars(resp.data.results)
      setCount(resp.data.count)
      console.log(`request done with query: ${query}, page: ${page}`)
    })
    .catch(err => {
      console.log("There was an error", err)
    });
    
  }, [page]);


  function handleSearch() {
    const qryStr = document.getElementsByName("search")[0].value;

    axios
    .get(`https://swapi.co/api/people/?search=${qryStr}`)
    .then(resp => {
      setQuery(qryStr)
      setPage(1)
      setChars(resp.data.results)
      setCount(resp.data.count)
      console.log(`HELLO request done with query: ${query}, page: ${page}`)
    })
    .catch(err => {
      console.log("There was an error", err)
    });

  }

  return (
    <section className="char-list">
      <Container className="themed-container" fluid={true}>
        <InputGroup>
          <Input name="search" />
          <InputGroupAddon addonType="append"><Button onClick={handleSearch}>Search</Button></InputGroupAddon>
        </InputGroup>
        <ButtonGroup>
          <Button onClick={() => (page > 1 ? setPage(Number(page - 1)) : null ) }>Previous</Button>
          <Button onClick={() => (page < (count / 10) ? setPage(Number(page + 1)) : null ) }>Next</Button>
        </ButtonGroup>
        <Row xs='1' sm='2' md='3'>
          {chars.map((item, idx) => {
            return (
              <Col><CharCard key={Number(page*10+idx).toString()} char={item} /></Col>
            )
          })
          }
        </Row>
      </Container>
    </section>
  )
};

export default CardList;