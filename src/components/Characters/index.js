import React from 'react';

import { ContainerItem, Character } from '../../styles/components'

const Characters = (props) => (
    <ContainerItem>
    {
        props.characters !== null && props.characters.map( (char, i) => <Character key={char+i}>{char}</Character>)
    }
    </ContainerItem>
)

export default Characters