import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './../App.css'


const Search = ({ getDates, startDate, handleStartChange, endDate, handleEndChange, accessToken, handleTokenChange }) => {
    return (
        <Container >
            <form onSubmit={getDates}>
                <Row >
                    <Col md={2}>
                        <label>
                            Start date
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={handleStartChange}
                        />
                    </Col>
                    <Col md={2} >
                        <label>
                            End date
                        </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={handleEndChange}
                        />
                    </Col>
                    <Col md={{ span: 4 , offset: 4 }} >
                        <input
                            placeholder='Access key'
                            value={accessToken}
                            onChange={handleTokenChange}
                        />
                        <Button type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </form>
        </Container>

    )
}

export default Search