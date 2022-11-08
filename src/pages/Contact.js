import styled from 'styled-components'
import { useState } from 'react'

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
    font-size: clapm(16px, 3vw, 20px);
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

    &:focus {
        outline: 1px solid #B2DDFF;
    }
`
const FirstTheInput = styled.input`
    width: 100%;
    font-size: 16px;
    border: 1px solid #D0D5DD;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;
    
    &:focus {
        outline: 1px solid #B2DDFF;
    }

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

    &:focus {
        outline: 1px solid #B2DDFF;
    }
`

const ThirdinputDiv = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 40px;
`

const ThirdInput = styled.textarea`
    resize: none;
    width:100%;
    font-size: 16px;
    border: ${props => props.messageError ? "1px solid red" : "1px solid #D0D5DD"};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    color: #667085;
    font-family: 'Inter', sans-serif;
    margin-top: 10px;

    &:focus {
        outline: 1px solid #B2DDFF;
    }
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
    cursor: pointer;
`

const SendMessageDis = styled.button`
    width: 100%;
    font-size: 16px;
    border: none;
    padding: 12px 20px;
    background: #B2DDFF;
    border: 1px solid #B2DDFF;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    color: white;
    cursor: auto;
`

const MyError = styled.p`
    color: red;
    font-size: 14px;
`

const Contact = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isChecked, setisChecked] = useState(false)
    const [firstError, setFirstError] = useState(false)
    const [lastError, setLastError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
        
    const handleFirstName=(e)=>{ setFirstName(e.target.value)}
    const handleLastName=(e)=>{ setLastName(e.target.value)}
    const handleEmail=(e)=>{ setEmail(e.target.value)}
    const handleMessage=(e)=>{ setMessage(e.target.value)}

    

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!firstname && !regName.test(firstname))setFirstError(true)
        if(!lastname) setLastError(true)
        if(!email) setEmailError(true)
        if(!message) setMessageError(true)

        if(firstname && lastname && email && message){
            alert(`Thanks for submitting`)
        }
    }

    return (
        <Container>
            <Element>
                <Title> Contact Me </Title>
                <Description> Hi there, contact me to ask me about anything you have in mind.</Description>
                <MyForm onSubmit = {onSubmit}>
                    <FirstLast>
                        <First>
                            <Label> First Name </Label>
                            <FirstTheInput id='first_name' 
                            placeholder='Enter your first name'
                            name= 'firstname' 
                            value={firstname}
                            onChange={handleFirstName}
                            />
                            {
                                firstError && <MyError> Please enter a first name</MyError>
                            }
                            
                        </First>

                        <First>
                            <Label> Last Name </Label>
                            <TheInput 
                            placeholder='Enter your last name' id='last_name'
                            name= 'lastname' 
                            value={lastname}
                            onChange={handleLastName}
                            />
                            {                       
                                lastError && <MyError> Please enter a last name</MyError>
                            }
                        </First> 
                    </FirstLast>
                        
                    <SecondinputDiv>
                            <Label> Email </Label>
                            <SecondInput id='email'
                            placeholder='yourname@email.com'
                            name= 'email' 
                            value={email}
                            onChange={handleEmail}
                            />

                            {                       
                                emailError && <MyError> Please enter a valid email address </MyError>
                            }
                    </SecondinputDiv>

                    <ThirdinputDiv>
                            <Label> Message </Label>
                            <ThirdInput 
                            messageError={messageError}
                            id='message' cols="2" rows="10" 
                            placeholder='Send me a message and I will reply you as soon as possible...'
                            name= 'message' 
                            value={message}
                            onChange={handleMessage}
                            />

                            {
                                messageError && <MyError> Please enter a message </MyError>
                            }
                            
                    </ThirdinputDiv>

                    <FourthinputDiv>
                            <MyCheck type='checkbox' checked={isChecked} onChange={()=>setisChecked((prev)=> !prev)}
                            />
                            <Agreement>You agree to providing your data to Uzoma Kenkwo  who may contact you.</Agreement>
                    </FourthinputDiv>

                    {
                        isChecked ? <SendMessage id='btn__submit'>Send Message</SendMessage> : <SendMessageDis disabled id='btn__submit'>
                        Send Message
                    </SendMessageDis>
                    }

                </MyForm>
            </Element>
        </Container>
    )
}

export default Contact