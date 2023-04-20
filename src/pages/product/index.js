import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

export default () => {
    const productDetails = {
        data: [
            { p_name: "Potatao", price: 200, unit: "kg", reating: 5, p_id: 1 },
            { p_name: "Tomato", price: 300, unit: "kg", reating: 5, p_id: 2 },
            { p_name: "Ginger", price: 100, unit: "kg", reating: 5, p_id: 3 },
            { p_name: "Lady Finger", price: 800, unit: "kg", reating: 5, p_id: 4 },
            { p_name: "Brinjal", price: 1200, unit: "kg", reating: 3, p_id: 5 },
            { p_name: "Banana", price: 1100, unit: "kg", reating: 2, p_id: 6 },
            { p_name: "Karela", price: 2000, unit: "kg", reating: 5, p_id: 7 }

        ]
    }
    return (
        <>
            <Container>
                <Row className="gx-3">

                    <p>Product Page</p>
                    {
                        productDetails.data.map(ele =>
                            <Col md={3} className="card my-5" style={{cursor:'pointer'}}>
                                <p><Link href={`/product/${ele.p_id}`}>{ele.p_name}</Link></p>
                                <p>{ele.price}</p>
                                <p>1 {ele.unit}</p>
                            </Col>
                        )
                    }

                </Row>
            </Container>
        </>
    )
}