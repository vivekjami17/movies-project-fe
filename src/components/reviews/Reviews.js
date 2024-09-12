import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import React from "react";
import Header from "../header/Header";

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
  const revText = useRef();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    let rev = revText.current;

    try {
      const respone = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Review </h3>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <img src={movie?.poster} alt="" />
          </Col>
          <Col>
            {
              <>
                <Row>
                  <Col>
                    <ReviewForm
                      handleSubmit={addReview}
                      revText={revText}
                      labelText="Write A Review"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            }
            {reviews?.map((r) => {
              return (
                <>
                  <Row>
                    <Col>{r.body}</Col>
                  </Row>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reviews;
