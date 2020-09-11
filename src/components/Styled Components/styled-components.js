import styled from 'styled-components';

const MainPageContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    box-sizing: border-box
    `

const PageContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `

const LeftImageContainer = styled.div`
    width: 50vw;
    `

const LeftImage = styled.img`
    width:90%;
`

const PageList = styled.ul`
    display: flex;
    width: 100%;
    margin: 0.25em 0;
    padding: 0 1em;
    background-color: #DADAFB;
    list-style-type: none;
    cursor: pointer;
    &:hover {
        background-color: #0B435B;
`

const PageListHeader = styled(PageList)`
    font-family: 'Titillium Web', sans-serif;
    background-color: #edc70a;
    cursor: auto;
    &:hover {
        background-color: #edc70a;
    `


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
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: 'Titillium Web', sans-serif;
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
//Details page styling

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0000ab
`

const DetailsPageContainer = styled(Container)`
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
`

const NavigationContainer = styled(Container)`
    width: 100%;
    justify-content: space-between;
`

const DetailedInfoElement = styled.div`
    width: 33.333%
`

const TableHeader = styled(PageListHeader);

export {
    //Main page styling
    MainPageContainer, PageContainer, LeftImageContainer, PageList, PageListHeader, PageListElement,
    PageHeaderElement, LeftImage, PokemonImage, PageHeaderElementID, PageListElementID, PaginationNav, Button,
    //Details page styling
    Container, DetailsPageContainer, NavigationContainer, DetailedInfoElement, TableHeader
}

//PageListContainer usunąłeś, check for bugs