import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4em;
    margin-bottom: 6em;
    font-family: 'Inter', sans-serif;
    `

const Element = styled.div`
    max-width: 700px;
    width: 90%;
`

const Title = styled.h1`
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 600;
    color: #101828;
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: 20px;
    margin-bottom: 35px;
    color: #475467;
`

const MyForm = styled.form`
    
`

const FirstLast = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;

    @media(max-width: 500px) {
    flex-direction: column;
    }
`

const Label = styled.label`
    color: #344054;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
`

const TheInput = styled.input`
    width: 100%;
    font-size: 16px;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;
`
const FirstTheInput = styled.input`
    width: 100%;
    font-size: 16px;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;

    @media(max-width: 500px) {
        margin-bottom: 10px;
    }
    
`

const First = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;

    @media(max-width: 500px) {
    width: 100%;
    }
`

const SecondinputDiv = styled.div`
    width: 100%;
    margin-bottom: 15px;
`

const SecondInput = styled.input`
    width: 100%;
    font-size: 16px;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;
    margin-top: 10px;
`

const ThirdinputDiv = styled.div`
    width: 100%;
`

const ThirdInput = styled.textarea`
    resize: none;
    width:100%;
    font-size: 16px;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;
    margin-top: 10px;
    margin-bottom: 30px;
    font-family: 'Inter', sans-serif;
`

const FourthinputDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const MyCheck = styled.input`
    margin-right: 10px;
`

const Agreement = styled.p`
    color: #475467;
    font-size: 16px;
`

const SendMessage = styled.button`
    width: 100%;
    font-size: 16px;
    border: none;
    padding: 12px 20px;
    background: #1570EF;
    border: 1px solid #1570EF;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    color: white;
`

const Contact = () => {
    return (
        <Container>
            <Element>
                <Title> Contact Me </Title>
                <Description> Hi there, contact me to ask me about anything you have in mind.</Description>
                <MyForm>
                    <FirstLast>
                        <First>
                            <Label> First Name </Label>
                            <FirstTheInput id='first_name' placeholder='Enter your first_name' />
                        </First>

                        <First>
                            <Label> Last Name </Label>
                            <TheInput placeholder='Enter your last name' id='last_name'/>
                        </First> 
                    </FirstLast>
                        
                    <SecondinputDiv>
                            <Label> Email </Label>
                            <SecondInput id='email'/>
                    </SecondinputDiv>

                    <ThirdinputDiv>
                            <Label> First Name </Label>
                            <ThirdInput id='message' cols="2" rows="10" placeholder='Send me a message and I will reply you as soon as possible...'/>
                    </ThirdinputDiv>

                    <FourthinputDiv>
                            <MyCheck type='checkbox'/>
                            <Agreement>You agree to providing your data to Uzoma Kenkwo  who may contact you.</Agreement>
                    </FourthinputDiv>

                    <SendMessage id='btn__submi'>
                        Send Mesage
                    </SendMessage>

                </MyForm>
            </Element>
        </Container>
    )
}

export default Contact