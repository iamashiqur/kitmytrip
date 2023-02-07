const { default: Link } = require("next/link");

module.exports = ({ buttonName = "", href= "", }) => {
    return (
      <>
        <Link
          href={href}
          className="bg-primary_main rounded-radius_10 px-8 py-3 mt-4 text-sm text-white font-semibold border hover:border-primary_main hover:bg-transparent hover:text-primary_main transition ease-in-out"
        >
          {buttonName}
        </Link>
      </>
    );
};



