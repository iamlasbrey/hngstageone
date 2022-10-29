import styled from "styled-components"

const Container = styled.div`
    margin-top: 2em;
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`
const Element = styled.div`
    width: 90%;
    max-width: 1152px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Image = styled.img`
    margin-bottom: 10px;
`

const Name = styled.h3`
    font-weight: 700;
    font-size: clamp(18px, 3vw, 20px);
    margin-bottom: 30px;
`

const Header = () => {
    return (
        <Container>
            <Element>
            <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1667067303/hng9/firststask/profile__imgwoman_image_zpjjje.png"/>

            <Name>
                Annette Black
            </Name>

            </Element>
        </Container>
    )
}

export default Header