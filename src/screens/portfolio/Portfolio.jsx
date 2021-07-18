import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})


  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {data.summary}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image className="portfolio__image" onClick={(a) => {
          setTempData({
            image: e.image,
            link: e.link,
            desc: e.desc,
            summary: e.summary,
            tech: e.tech
          })
          setModalShow(true)
        }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
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
      </Container>
    </div>
  );
}

export default Portfolio
