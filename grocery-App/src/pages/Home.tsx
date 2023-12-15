
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";


export function Home() {
    return (
    <>
 <h1>Welcome to Compare App!!</h1>

    <Row md={2} xs={1} lg={3} xl={4} className="g-3">
      {storeItems.map(item => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  </>
  )
  }