import React from "react";

const Carlogo_and_text = ({ heading1 }) => {
  return (
    <div className="flex justify-center w-3/5 mt-10">
      <div className="float-left ml-40">
        <h3 className="text-3xl font-bold mt-2">{heading1}</h3>
        <p className="mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
        <button className="border-2 rounded-lg bg-lime-500 p-2 border-transparent font-semibold mt-4">
          Read more
        </button>
      </div>
      <div className="">
        <img
          src="/images/CarAboutus.png"
          className="ml-60 size-full border-l-2 border-lime-400 p-5"
        ></img>
      </div>
    </div>
  );
};

export default Carlogo_and_text;
