import { Title, Container, Containerinputs, TopBackground, Form, InputLabel, Input, Button } from './styles'
import UsersImage from './assets/users.png'

function Home() {
  return (

    <Container>
      <TopBackground>
        <img src={UsersImage} alt='Imagens-usuarios'/>
      </TopBackground>
      <Form>
        <Title>Ok react!!</Title>
          <Containerinputs>

            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário'/>
            </div>

          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário'/>
          </div>

          <div>
            <InputLabel>E-mail<span>*</span></InputLabel>
            <Input type='email' placeholder='E-mail do usuário'/>
          </div>

      </Containerinputs>
      <Button>Cadastrar Usuário</Button>
    </Form>
      </Container >
  )
}

export default Home
