import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 3em;
`

const Element = styled.div`
    width: 90%;
    max-width: 700px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    margin-top: 5px;
    cursor: pointer;
`

const Image = styled.img``
const TopBar = () => {
    return (
        <Container>
            <Element> 
                <Image src='https://res.cloudinary.com/iamlasbrey/image/upload/v1667097221/hng9/firststask/_Avatar_share_button_e6tdon.png'/>
            </Element>
        </Container>
    )
}

export default TopBar