import styled from 'styled-components';

const MainPageContainer = styled.div`
    font-family: 'PT Sans', sans-serif;
    display: flex;
    `

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `

const LeftImageContainer = styled.div`
    width: 50%;
    height: 100vh;
    `;

const LeftImage = styled.img`
    width:100%;
    height: 100%;
`
const PageListContainer = styled.div`
   
`
const PageList = styled.ul`
    display: flex;
    width: 100%;
    margin: 0.25em 0;
    padding: 0 1em;
    background-color: #DADAFB;
    list-style-type: none;
`

const PageListHeader = styled(PageList)`
    font-family: 'Anton', sans-serif;
    background-color: #edc70a;
    `;


const PageListElement = styled.li`
    display: flex;
    width: 16.6%;
    height: 3.5em;
    align-items: center;
    justify-content: center;
    padding: 0 0.8em;
    text-transform: uppercase
`

const PageHeaderElement = styled(PageListElement)`
    color: #0000ab;
    height: 3em;
    font-size: 1.5em;
    font-style: italic;
`

const PokemonImage = styled.img`
    width: 100%;
    height: 100%;
`

const PaginationNav = styled.nav`
    display: flex;
`

const Button = styled.button`
    width: 1.5em;
    height: 1.5em;
    font-family: 'Anton', sans-serif;
    font-size: 1.5em;
    background-color: #edc70a;
    color: #0000ab;
    margin: 1em 0.25em;
    border: 0px solid transparent;
    cursor: pointer;
`

const PageHeaderElementID = styled(PageHeaderElement)`
    width: 8.3%
`

const PageListElementID = styled(PageListElement)`
    width: 8.3%
`


export {MainPageContainer, Container, LeftImageContainer, PageListContainer, PageList, PageListHeader, PageListElement,
    PageHeaderElement, LeftImage, PokemonImage, PageHeaderElementID, PageListElementID, PaginationNav, Button}