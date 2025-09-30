import React from "react";

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img
          src="/images/logo.webp"
          alt="Coming Soon"
          className="entrance-logo"
        />
        <div className="text-wrapper">
          <h3 className="gradient-title">
            Comming <br /> May 26th <br /> 2026
          </h3>
        </div>
        <div className="flex-center gap-10">
          <img
            src="/images/ps-logo.svg"
            alt="Coming Soon"
            className="md:w-32 w-20"
          />
          <img
            src="/images/x-logo.svg"
            alt="Coming Soon"
            className="md:w-52 w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
