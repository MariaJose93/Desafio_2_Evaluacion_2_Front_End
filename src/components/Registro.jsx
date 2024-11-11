import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import Formulario from './Formulario';
import SocialMedia from './SocialButton';

const image = 'https://freepngimg.com/thumb/natural_environment/32626-6-nature-transparent.png'

function Registro() {
    return (
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <CardImg variant="top" src={image}></CardImg>
          <br />
          <br />
          <Card.Title>Registrate y se parte de nuestra comunidad</Card.Title>
          <br />
          <SocialMedia/>
          <Card.Text>
              <Formulario/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
export default Registro;