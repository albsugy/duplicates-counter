import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/styles/hljs';

import { ContainerItem } from '../../styles/components'

const ShowCode = () => {
    const codeString = `
    function duplicateCount(text){
        let duplicatedCharacters  = [];
          text.toLowerCase().split('').forEach( (char, index, charsArray) => {
            if (duplicatedCharacters.indexOf(char) < 0 && index !== charsArray.lastIndexOf(char) ) duplicatedCharacters.push(char)
          })
        return duplicatedCharacters.length;
    }
    `;
    return (
        <ContainerItem>
            <h4>Funtion</h4>
            <SyntaxHighlighter language='javascript' style={arduinoLight}>{codeString}</SyntaxHighlighter>;  
        </ContainerItem>
    )
    
}

export default ShowCode