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
    height: 95vh;
    `

const LeftImage = styled.img`
    width:90%;
    height: 100%;
`

const PageList = styled.ul`
    display: flex;
    width: 100%;
    margin: 0.25em 0;
    padding: 0 1em;
    background-color: #f1f1ff;
    list-style-type: none;
    cursor: pointer;
    &:hover {
        background-color: #0B435B;
`

const PageListHeader = styled(PageList)`
    font-family: 'Titillium Web', sans-serif;
    background-color: #fcff29;
    cursor: auto;
    &:hover {
        background-color: #fcff29;
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
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.5em;
    background-color: #fcff29;
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
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0000ab
`

const DetailsPageContainer = styled(Container)`
    width: 90vw;
    height: 90vh;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
`

const NavigationContainer = styled(Container)`
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

const DetailedInfoElement = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 33.333%
`

const Table = styled.table`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid white;
    border-right: 3px solid white;
    text-transform: uppercase;
`

const TableHead = styled.thead `
    width: 100%;
    background-color: #fcff29;
    font-family: 'Titillium Web', sans-serif;
    font-style: italic;
    font-size: 1.5em;
    border: 1px solid white;
    border-right: 3px solid white;
`

const TableHeader = styled.tr`
    margin: 0.25em 0;
    padding: 0 1em;
`

const TableRow = styled.tr`
    border: 1px solid white;
    border-right: 3px solid white;
    background-color: #f1f1ff;
`
const TableH = styled.th`
    border: 0px;
`
const TableD = styled.td`
    padding: 1em;
    border: 1px solid white;
    border-right: 3px solid white;
    background-color: #f1f1ff;
`

const TableNumber = styled(TableD)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Name = styled.p`
    font-size: 5em;
    font-style: italic;
    margin: 40px;
    font-family: 'Titillium Web', sans-serif;
    text-transform: uppercase
`

const NavButton = styled(Button)`
    width: 7em;
    height: 3em;
    font-style: italic;
`

const Bold = styled.span`
    font-weight: 700;
`

const InfoList = styled.ul`
    font-size: 0.9em;
    list-style-type: none;
    padding: 0;
`

const InfoListElements = styled.li`
    padding: 0.5em 0;
`

const SmallImageContainer = styled(DetailedInfoElement)`
    display:flex;
    justify-content: center;
    align-items: center;
`

const SmallImage = styled.img `
    width: 400;
    height: 400;
`
export {
    //Main page styling
    MainPageContainer, PageContainer, LeftImageContainer, PageList, PageListHeader, PageListElement,
    PageHeaderElement, LeftImage, PokemonImage, PageHeaderElementID, PageListElementID, PaginationNav, Button,
    //Details page styling
    Container, DetailsPageContainer, NavigationContainer, DetailedInfoElement, Table, TableHeader, TableRow, TableHead,
    TableH, TableD, Name, NavButton, Bold, InfoList, InfoListElements, TableNumber, SmallImage, SmallImageContainer
}

//PageListContainer usunąłeś, check for bugs