import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ data }) => {
  return (
    <div className="container text-white">
      <Row>
        <div className="d-flex justify-content-between align-items-end mb-1">
          <h3>POPULAR ANIME</h3>
          <Link  href="/popular"><a className='text-decoration-none text-primary'>lihat semua...</a></Link>
        </div>
        {data.data?.map((item) => (
          <Col key={item.mal_id} className="col-md-3 mb-2">
            <Card className="h-100 bg-dark text-light border border-secondary rounded">
              <Image
                alt="anime image"
                src={item.images.webp.image_url}
                width={300}
                height={300}
                className=" object-fit rounded
          "
              />
              <CardBody className="d-flex flex-column justify-content-between">
                <CardTitle tag="h5">{item.title}</CardTitle>
                <Link href={`/details/${item.mal_id}`}>
                  <Button className="btn-warning">Details</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AnimeList;
