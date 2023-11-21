import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../component/Navigation";
import Search from "../../component/Search";
import Footer from "../../component/Footer";

const Find = () => {
  const router = useRouter();
  const { find } = router.query;
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const animeSearch = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${find}`
        );
        setAnimeData(response.data.data);
      } catch (error) {
        console.log("masuk ke error", error);
      }
    };

    if (find) {
      animeSearch();
    }
  }, [find]);

  return (
    <>
      <Navigation />
      <Search />
      <div className="container">
        <Row>
          <h2 className="text-white">pencarian untuk {find}</h2>
          {animeData.map((item) => (
            <Col key={item.mal_id} className="col-md-3 mb-2">
              <Card className="h-100 bg-dark text-light border border-secondary rounded">
                {/* <img alt="anime image" src={item.images.webp.image_url} /> */}
                <Image
                  alt="anime image"
                  src={item.images.webp.image_url}
                  width={300}
                  height={350}
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
        <Footer/>
    </>
  );
};

export default Find;
