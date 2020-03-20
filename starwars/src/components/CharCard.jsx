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
      </CardBody>
      <CardFooter>
        <Badge color="primary">Gender: {char.gender}</Badge>
        <Badge color="secondary">Height: {char.height}cm</Badge>
        <Badge color="info">Weight: {char.weight}kg</Badge>
      </CardFooter>
    </Card>
  )
}

export default CharCard;