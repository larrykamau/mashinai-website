import React from "react";
import NotFoundImage from "./not-found.svg";
import {
  NoResultWrapper,
  ImageWrapper,
  Image,
  NoResultMsg,
} from "./NotFound.style";

const NoResult = ({ id, style }) => {
  return (
    <NoResultWrapper id={id} style={style}>
      <NoResultMsg>Sorry, 404 Not found :(</NoResultMsg>

      <ImageWrapper>
        <Image src={NotFoundImage} alt="Not Found" />
      </ImageWrapper>
    </NoResultWrapper>
  );
};

export default NoResult;
