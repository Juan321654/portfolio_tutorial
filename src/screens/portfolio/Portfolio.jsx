import React from 'react'
import './portfolio.css'
import PopupModal from './PopupModal'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Portfolio() {
  const [modalShow, setModalShow] = React.useState(false);

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image className="portfolio__image" onClick={() => setModalShow(true)} src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
      </Card>
    )
  })

  return (
    <div className="portfolio__main__container">
      <h1>PORTFOLIO</h1>
      <p>
        This is my Github page
        <a href="https://github.com/Juan321654" target="_blank" rel="noreferrer"> https://github.com/Juan321654</a>
      </p>
      <Container fluid="lg" style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
        <PopupModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
}

export default Portfolio
