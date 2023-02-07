module.exports = ({
  contentTitle = "",
  breakContentTitle = "",
  contentDescription = "",
  breakCotentDescriptionOne = "",
  breakCotentDescriptionTwo = "",
  breakCotentDescriptionThree = "",
  paddingBottom = "",
}) => {
  return (
    <>
      <h3 className="font-semibold text-fs_56 leading-lh_66 text-text_1 pb-[30px]">
        {contentTitle} <br /> {breakContentTitle}
      </h3>
      <p
        className={`font-medium text-lg leading-7 text-text_2 ${paddingBottom}`}
      >
        {contentDescription}
        <br /> {breakCotentDescriptionOne} <br /> {breakCotentDescriptionTwo}{" "}
        <br /> {breakCotentDescriptionThree}
      </p>
    </>
  );
};
