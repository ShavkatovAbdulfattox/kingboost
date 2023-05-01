import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Container from "../Container/Container";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviewsData = [
  {
    img: "image/main/review-img.png",
  },
  {
    img: "image/main/review-img2.png",
  },
  {
    img: "image/main/review-img3.png",
  },
  {
    img: "image/main/review-img4.png",
  },
  {
    img: "image/main/review-img.png",
  },
  {
    img: "image/main/review-img2.png",
  },
];

function Reviews() {
  return (
    <Wrapper>
      <Container>
        <h3>REVIEWS</h3>
        <Title>What does our clients say</Title>
        <ReviewsContent>
          <Swiper className="mySwiper" slidesPerView={3.5} spaceBetween={30}>
            {reviewsData.map(({ img }, i) => {
              return (
                <SwiperSlide key={i}>
                  <ReviewCard>
                    {" "}
                    <Description>
                      <Date>
                        <p>10/02/2021</p>
                        <span>
                          {new Array(4).fill(1).map((_, i) => {
                            return (
                              <svg
                                key={i}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19.2841 7.27657L13.3333 6.41173L10.6731 1.01876C10.6005 0.871102 10.4809 0.751571 10.3333 0.678915C9.96297 0.496102 9.51297 0.648446 9.32781 1.01876L6.66766 6.41173L0.716878 7.27657C0.552815 7.30001 0.402815 7.37735 0.287971 7.49454C0.149131 7.63724 0.0726244 7.82923 0.0752613 8.02831C0.0778981 8.22739 0.159463 8.41728 0.302034 8.55626L4.6075 12.7539L3.59031 18.6813C3.56646 18.8191 3.58172 18.961 3.63436 19.0906C3.687 19.2203 3.77491 19.3326 3.88813 19.4148C4.00135 19.497 4.13535 19.5459 4.27492 19.5558C4.4145 19.5658 4.55407 19.5364 4.67781 19.4711L10.0005 16.6727L15.3231 19.4711C15.4684 19.5484 15.6372 19.5742 15.7989 19.5461C16.2067 19.4758 16.4809 19.0891 16.4106 18.6813L15.3934 12.7539L19.6989 8.55626C19.8161 8.44142 19.8934 8.29142 19.9169 8.12735C19.9802 7.7172 19.6942 7.33751 19.2841 7.27657Z"
                                  fill="#7A59FF"
                                />
                              </svg>
                            );
                          })}
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8849 7.63292L15.0012 7.86872L15.2614 7.90653L21.2106 8.77114C21.2108 8.77117 21.211 8.7712 21.2112 8.77123C21.3526 8.79255 21.4428 8.92095 21.4227 9.05111L21.4227 9.05111L21.4219 9.05664C21.4143 9.10972 21.3892 9.15959 21.3491 9.19896C21.3491 9.19902 21.349 9.19909 21.3489 9.19915L17.0444 13.3959L16.8562 13.5794L16.9006 13.8385L17.9178 19.7658L17.9179 19.7662C17.9411 19.9007 17.8509 20.0298 17.714 20.0534L17.7132 20.0535C17.6588 20.063 17.6031 20.0537 17.5581 20.0297L17.5558 20.0285L12.2332 17.2301L12.0005 17.1078L11.7678 17.2301L6.44513 20.0285L6.44436 20.0289C6.40324 20.0507 6.35686 20.0604 6.31049 20.0571C6.26411 20.0538 6.21958 20.0376 6.18196 20.0102C6.14434 19.9829 6.11512 19.9456 6.09763 19.9025C6.08014 19.8594 6.07507 19.8123 6.083 19.7665L6.08311 19.7658L7.1003 13.8385L7.14476 13.5794L6.95654 13.3959L2.65108 9.19825L2.65104 9.19822C2.60337 9.15175 2.5761 9.08826 2.57522 9.02169C2.57434 8.95543 2.59968 8.89151 2.6457 8.84387C2.68501 8.80403 2.73471 8.7791 2.78759 8.77155L2.78879 8.77137L8.73957 7.90653L8.99976 7.86872L9.11607 7.63292L11.775 2.24237C11.7752 2.24207 11.7753 2.24178 11.7755 2.24148C11.8386 2.11641 11.9902 2.06714 12.1119 2.12726L12.1125 2.12754C12.1612 2.15147 12.2006 2.19088 12.2245 2.23951L12.2247 2.23995L14.8849 7.63292Z"
                              stroke="#7A59FF"
                            />
                            <path
                              d="M12 17V2C11.1667 3.66667 9.5 7.1 9.5 7.5C9.5 7.9 5.16667 8.66667 3 9L7 13.5L6.5 20L12 17Z"
                              fill="#7A59FF"
                            />
                          </svg>
                        </span>
                      </Date>

                      <h2>Лучший сервис из всех возможных!</h2>
                      <p>
                        With our PROs, it became POSSIBLE. Don't spend your
                        precious time and nerves on routine — GET cheap and
                        hassle-free boost NOW!
                      </p>
                    </Description>
                    <Image>
                      <img src={img} alt="avatar-of-people" />
                      <>
                        <h2>
                          IVAN IVANOV
                          <span>Sourse : Trustpilot</span>
                        </h2>
                      </>
                    </Image>
                  </ReviewCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ReviewsContent>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding-bottom: 5rem;
  & h3 {
    color: ${COLORS.white};
  }
`;
const Title = styled.h2`
  font-size: 36px;
  line-height: 44px;
  color: ${COLORS.white};
  margin-top: 10px;
  margin-bottom: 5rem;
`;
const ReviewsContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;
const ReviewCard = styled.div`
  flex-basis: 356px;
`;
const Description = styled.div`
  padding: 24px 28px 35px 28px;
  background: #212121;
  border: 3px solid #313132;
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.49);
  border-radius: 4px;
  position: relative;
  margin-bottom: 3rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -7%;
    left: 31px;
    width: 0;
    height: 0;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-top: 20px solid #313132;
  }
  & h2 {
    font-size: 20px;
    line-height: 22px;
    color: ${COLORS.white};
    margin-top: 27px;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 18px;
    line-height: 28px;
    color: ${COLORS.gray.new};
    font-weight: 600;
  }
`;
const Date = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    color: ${COLORS.gray.new};
  }
`;
const Image = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2.5rem;
  padding-bottom: 1rem;
  & img {
    /* border: 5; */
    outline: 5px solid ${COLORS.violet};
    outline-offset: 5px;
    border-radius: 50%;
  }
  & h2 {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${COLORS.white};
  }
  & h2 > span {
    display: block;
    color: ${COLORS.gray.new};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: capitalize;
  }
`;
export default Reviews;
