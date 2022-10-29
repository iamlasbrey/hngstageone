import styled from "styled-components"
import {myList}  from "../data"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
`

const Element = styled.div`
    width: 90%;
    max-width: 1152px;
`
const Items = styled.ul`
    width: 100%;
    `

const Item = styled.li`
    background: #EAECF0;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 8px;
    padding: 24px 32px;
    font-size: clamp(14px, 3vw, 18px);
`
const Listings = () => {
    return (
        <Container>
            <Element>
            <Items>
                {
                    myList.map((items)=>(
                        <Item key={items.id}> {items.name}</Item>
                    ))
                }
            </Items>
            </Element>
        </Container>
    )
}

export default Listings