import React from "react";

export const Contact = () => {
  return (
    <div className="h-screen w-full bg-[#99AC96] pt-10 ">
      <div className="max-w-[52rem] p-4 mx-auto justify-center flex flex-col h-full  bg-white">
        <div className="flex justify-center items-center w-full ">
          <form
            action="https://getform.io/f/f5571f32-c17f-4575-bcea-9648d87799c9"
            method="POST"
            className="flex flex-col w-full md:w-2/3 "
          >            <h1 className="flex justify-center pb-12">CONTACT</h1>

            <div className="flex ">

              <input
                name="name"
                type="text"
                placeholder="Name"
                className=" w-full text-black mr-4"
              />
              <input
                name="phone"
                type="number"
                placeholder="Phone number"
                className="w-full text-black"
              />
            </div>

            <input
              name="email"
              type="text"
              placeholder="Email"
              className="text-black"
            />
            <textarea
              name="message"
              type="text"
              className="pb-10 text-black"
              placeholder="Comment"
            />
            <div className="flex justify-center mt-3">
              <button
                className="text-black w-20 hover:bg-fuchsia-700 p-4 border-2 rounded-md"
                value="send"
                type="submit"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
