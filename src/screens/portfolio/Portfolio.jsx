import React from 'react'
import './portfolio.css'
import Button from 'react-bootstrap/Button'
import PopupModal from './PopupModal'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Portfolio() {
  const [modalShow, setModalShow] = React.useState(false);

  const mapped = portfolioData.map((e, idx, arr) => {
    return (
      <Card style={{ width: '50%'}} fluid="sm">
        <Image src={e.image}/>
      </Card>
    )
  })

  return (
    <Container fluid="lg">
      <Row>
        {mapped}
      </Row>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <PopupModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </Container>
  );
}

export default Portfolio
