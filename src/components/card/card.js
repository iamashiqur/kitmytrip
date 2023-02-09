import Image from "next/image";

module.exports = ({
  cardImageSrc = "",
  cardImgClassName = "",
  cardBodyClassName = "",
  cardTitle = "",
  cardTitleClassName = "",
  cardText = "",
  cardTextClassName = "",
  className = "",
}) => {
  return (
    <div className={`card ${className}`}>
      <div className={`card-img ${className}`}>
        <Image src={cardImageSrc} className={`${cardImgClassName}`} />
      </div>
      <div className={`${cardBodyClassName}`}>
        <h5 className={`${cardTitleClassName}`}>{cardTitle}</h5>
        <p className={`${cardTextClassName}`}>{cardText}</p>
      </div>
    </div>
  );
};
