import { Card, CardDeck, Jumbotron} from 'react-bootstrap'

const TotalNumbers = (data) => {
    if (data.data.length !== 0) {
        return (
            <CardDeck className="py-3 px-md-5">
                <Card className="text-center" >
                    <Card.Body>
                        <Card.Text>
                            {data.data.total_conversation_count}
                        </Card.Text>
                        <Card.Title>
                            Total conversation count
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>
                            {data.data.total_user_message_count}
                        </Card.Text>
                        <Card.Title>
                            Total user message count
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>
                            {data.data.total_visitor_message_count}
                        </Card.Text>
                        <Card.Title>
                            Total visitor message count
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

        )
    } else {
        return (
            <Jumbotron className="text-center">
                <h1>Whoops, there seems to be no data available.</h1>
            </Jumbotron>
        )
    }

}


export default TotalNumbers