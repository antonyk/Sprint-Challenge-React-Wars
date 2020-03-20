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
      <CardHeader tag="h3">{char.name}</CardHeader>
      <CardBody>
        About this person <Emoji name='ufo' />
      </CardBody>
      <CardFooter>
        <Badge color="primary">Gender: {char.gender}</Badge>
        <Badge color="secondary">Height: {char.height ? char.height + ' cm' : 'n/a'}</Badge>
        <Badge color="info">Mass: {char.mass ? char.mass + ' kg' : 'n/a'}</Badge>
      </CardFooter>
    </Card>
  )
}

export default CharCard;