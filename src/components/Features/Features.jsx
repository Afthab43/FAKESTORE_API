import React from "react";
import { Link } from "react-router-dom";

const Features = ({ cards = [] }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 items-center justify-center">
            {cards?.map((card) => {
              return (
                <>
                  <Link
                    to={`/categories/${card}`}
                    className="p-1 md:w-fit cursor-pointer"
                  >
                    <div className="flex rounded-lg h-full bg-gray-100 p-2 items-center justify-center flex-col">
                      <div className="flex items-center ">
                        <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
                          {card || "Example card"}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
