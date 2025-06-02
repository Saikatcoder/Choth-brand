import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <div className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off
      </div>
      <p className="text-gray- mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        cumque.
      </p>
      <form
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Enter your email.."
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
