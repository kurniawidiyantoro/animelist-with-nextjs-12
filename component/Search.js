import { useRouter } from "next/router";
import { useState } from "react";
import { InputGroup, Input, Button, Row, Col, Form } from "reactstrap";

const Search = () => {
const [find,setFind] = useState()
const router = useRouter()

  const handleSearch = (e) => {
    if(!find) return
e.preventDefault();
router.push(`/search/${find}`)
  };

  return (
    <div className="mb-5 mt-2">
      <Row className=" justify-content-center">
        <Col md='6' xs='8'>
          <h4 className="text-center text-white">SEARCH ANIME</h4>
          <Form onSubmit={handleSearch}>

          <InputGroup >
            <Input placeholder="anime title..." value={find}
                onChange={(e) => setFind(e.target.value)} />
            <Button color="warning">
              Search
            </Button>
          </InputGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
