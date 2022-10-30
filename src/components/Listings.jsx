import styled from "styled-components"
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
const Items = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    `

const Anchor = styled.a`
    background: #EAECF0;
    border: 1px solid #EAECF0;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 8px;
    padding: 24px 32px;
    font-size: clamp(14px, 4vw, 18px);
    cursor: pointer;
    color: inherit;
`

const Small = styled.p`
    font-size: clamp(10px, 4vw, 13px);
    margin-top: 10px;
    line-height: 20px;
`

const Listings = () => {
    return (
        <Container>
            <Element>
            <Items>

            <Anchor id="twitter" href="http://twitter.com/iamlasbrey" target="_blank" rel="noopener noreferrer"> 
                    Twitter Link
                </Anchor>

                <Anchor id="btn__zuri" href="https://training.zuri.team/" target="_blank" rel="noopener noreferrer"> 
                    Zuri Team
                </Anchor>
                
                <Anchor id="books" href="http://books.zuri.team" target="_blank" rel="noopener noreferrer"> 
                    Zuri Books
                <Small>Modern and comprehensive books for your design and development skill up</Small>
                </Anchor>

                <Anchor id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<iamlasbrey>" target="_blank" rel="noopener noreferrer"> 
                    Python Books
                <Small>Most comprehensive python book for new and experienced developers. Clcik here to Buy.</Small>
                </Anchor>

                <Anchor id="pitch" href="https://background.zuri.team" target="_blank" rel="noopener noreferrer"> 
                    Background Check for Coders 
                <Small>Not sure about who you are adding to your team? Lets run a background check for you. Click on this link now</Small>
                </Anchor>

                <Anchor id="book__design" href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer"> 
                    Design Books 
                <Small>Downloand our all in one free design resource for new and experienced designers. </Small>
                </Anchor>
            </Items>
            </Element>
        </Container>
    )
}

export default Listings