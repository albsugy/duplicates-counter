import styled from 'styled-components'

// Container
export const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
`

// ContainerItem
export const ContainerItem = styled.div`margin-top: 30px;`

// Title
export const ItemTitle = styled.div`font: 2.5rem 'Josefin Slab', serif;color:#000;`

// Input
export const Input = styled.input`
    width: 360px;
    background: #fff;
    color: #a3a3a3;
    font: inherit;
    -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
`

// ErrrorMsg
export const ErrorMsg = styled.p`
    height: 20px;
    width: 377px;
    border: 1px solid;
    background: #c73f3f;
    color: #fff;
    padding: 7px 20px;
    border-radius:3px;
    margin-bottom: 0;
`

// Character
export const Character = styled.span`
    display: inline-block;
    padding: 10px 20px;
    color: #ccc;
    margin-right:10px;
    border: 2px solid #ccc;
    font: 2rem 'Josefin Slab', serif;
    transition: all .3s ease-in-out;
    &:hover{
        background: #fff;
        color:#000;
    }
` 

// Label
export const Label = styled.span`
    display: inline-block;
    padding: 10px 20px;
    margin:16px 0;
    font: 2rem 'Josefin Slab', serif;
` 