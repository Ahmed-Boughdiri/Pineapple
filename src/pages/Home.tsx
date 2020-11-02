import React,{ useState } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../layout/Home.css";
import upload from "../assets/upload.svg";
import ReactLoading from 'react-loading';

const UplaodScene = () => (
  <Col md={6} className="p-4">
    <div className="uploading-scene">
      <img src={upload} alt="" height={70} width={70} />
      <h5>Drag The Image</h5>
    </div>
    <label className="home-btn btn btn-success">
        <input type="file" />
        Choose An Image
    </label>
  </Col>
);

const ImageRequirement = () => (
  <Col md={6} className="py-4 text-left">
    <h5 className="text-uppercase">Image Requirement</h5>
    <p className="image-requirement">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis
      eaque, repudiandae veniam corporis consectetur blanditiis ratione laborum
      placeat expedita?
    </p>
    <p className="image-requirement">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis
      eaque, repudiandae veniam corporis consectetur blanditiis ratione laborum
      placeat expedita?
    </p>
  </Col>
);

const ProcessedImage = () => (
  <Col md={6} className="py-4 text-left">
    <h5 className="text-uppercase">Uploaded Image</h5>
    <p className="image-requirement">
      Size: 80KB <br />
      Format: JPEG <br />
      Color Format: RGB <br />
      Name: Image <br />
    </p>
    <p className="image-requirement">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis
      eaque, repudiandae veniam corporis consectetur blanditiis ratione laborum
      placeat expedita?
    </p>
  </Col>
);

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [imageUploaded, setImageUploaded] = useState(false);
  return (
    <div className="home">
        <Jumbotron className="home-container shadow">
        {
            loading ? (
                <div className="loader">
                    <ReactLoading type={"spinningBubbles"} color={"#28a745"} height={150} width={150} />
                </div>
            ) : (
                    <>
                        <h3>Upload Your File<span></span></h3>
                        <Row className="home-wrapper">
                            <UplaodScene />
                            {
                                imageUploaded ? <ProcessedImage /> : <ImageRequirement />
                            }
                        </Row>
                    </>
            ) 
        }
        </Jumbotron>
    </div>
  );
};

export default Home;
