module.exports = ({
  sectionTitle = "",
  sectionDescription = "",
  BrakSectionDescription = "",
}) => {
  return (
    <>

        <div className="section-header text-center">
          <h3 className=" font-bold text-fs_56 leading-lh_66 text-text_1">
            {sectionTitle}
          </h3>
          <p className=" font-medium text-lg leading-7 text-text_3">
            {sectionDescription} <br /> {BrakSectionDescription} 
          </p>
        </div>

    </>
  );
};
