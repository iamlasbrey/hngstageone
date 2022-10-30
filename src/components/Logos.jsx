import styled from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    margin: 3em 0px 7em 0px;
`

const Elements = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Image = styled.img``

const Anchor = styled.a`
    cursor: pointer;
    margin-right: 30px;
`

const Logos = () => {
    return (
        <Container>
            <Elements>
                <Anchor href="/#"> 
                    <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1667086397/hng9/firststask/slackslack_x6cahu.png"/>
                </Anchor>

                <Anchor id="slack" href="https://github.com/iamlasbrey/hngstageone" target="_blank" rel="noopener noreferrer"> 
                    <Image src="https://res.cloudinary.com/iamlasbrey/image/upload/v1667086307/hng9/firststask/Icongithun_cucwct.png"/>
                </Anchor>

            </Elements>
        </Container>
    )
}

export default Logos

//https://github.com/iamlasbrey/hngstageone