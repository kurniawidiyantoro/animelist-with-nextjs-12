import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation from "../../component/Navigation";
import Footer from "../../component/Footer";
import Image from "next/image";
import { Button, Col, Container, Row, Table } from "reactstrap";
import YouTube from "react-youtube";
import HeadTag from "../../component/HeadTag";


const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [topAnime, setTopAnime] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/anime/${id}`
      );
      setTopAnime(response.data.data);
    } catch (error) {
      console.log("masuk ke error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  // Youtube player handling
  const opts = {
    height: "250",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };
const handleButtonTrailer = () => {
  setIsOpen(!isOpen)
}
  return (
    <div>
        <HeadTag title='Details'/>
      <Navigation />
      {!topAnime.images ? (
        <p className="text-white">loading...</p>
      ) : (
        <div>
          <Container >
            <Row className="d-flex justify-content-start">
              <Col md='4' xs='12'>
                <Image
                  className=" rounded "
                  src={topAnime.images.webp.image_url}
                  width={350}
                  height={400}
                />
              </Col>
              <Col  md='8' xs='12' >
                <Table bordered dark>
                  <thead>
                    <tr>
                      <th>Title : {topAnime.title}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Aired : </strong>
                        {topAnime.aired.string}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Status : </strong>
                        {topAnime.status}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Genre : </strong>
                        {!topAnime.genres[0] ? (<span>-</span>) : (<span>{topAnime.genres[0].name}</span>)  }
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Studios : </strong>
                        {!topAnime.studios[0] ? (<span>-</span>) : (<span>{topAnime.studios[0].name}</span>)  }
                      </td>
                    </tr>
                  </tbody>
                  <p className="text-white mt-1 mb-0">
                    <strong>Synopsis</strong>
                  </p>
                  <p className="text-white mt-0">{topAnime.synopsis}</p>
                </Table>
              </Col>
            </Row>
          </Container>
          {!isOpen ? (<div className="d-flex justify-content-center">
            <Button onClick={handleButtonTrailer} className="btn-warning w-25">Watch Trailer</Button>
            </div>) : (<YouTube
            className="text-center"
            videoId={topAnime.trailer.youtube_id}
            opts={opts}
          />)}
          
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Details;
