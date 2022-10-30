import styled from "styled-components"

const Container = styled.div`
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
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
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
            <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1667090425/hng9/firststask/ad855e9890011972fe6e3c997e5a3985_kpea2c.jpg"id="profile__img"/>

            <Name>
                Uzoma Kenkwo
            </Name>

            </Element>
        </Container>
    )
}

export default Header