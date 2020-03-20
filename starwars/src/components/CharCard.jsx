import React, { useState } from 'react'
// import styled from 'styled-components'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Badge} from 'reactstrap'
import Emoji from './Emoji'


// const BaseCard = styled.div`
//   width: ${props => props.colCount ? Math.floor(100 / props.colCount) : 2 }%;
// `


function CharCard({char}) {

  return (
    <Card>
      <CardHeader tag="h3">{char.name} <Emoji name='ufo' /></CardHeader>
      <CardBody>
        About this person
        Gender: <Badge color="info">{char.gender}</Badge>
        Height: <Badge color="info">{char.height}cm</Badge>
        Weight: <Badge color="info">{char.weight}kg</Badge>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default CharCard;