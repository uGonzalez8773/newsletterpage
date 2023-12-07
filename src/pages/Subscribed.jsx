import successCheck from ".././assets/icon-success.svg";
import { Link, useLocation } from "react-router-dom";

function Subscribed() {
  const location = useLocation();
  const email = location.state && location.state.email;

  return (
    <main className=" md:bg-primaryColor md:h-screen md:flex ">
      <section className="flex flex-col justify-between h-screen p-5 md:w-4/12 md:h-auto md:items-center md:mx-auto md:my-auto md:bg-white rounded-[36px] md:p-10">
        <div className="flex flex-col gap-5 font-mainFont text-primaryColor h-fit mt-7 md:mt-0 md:w-fit">
          <img
            src={successCheck}
            alt="Success checkmark"
            className="w-16 mb-4"
          />
          <h1 className="font-bold text-4xl">Thanks for subscribing!</h1>
          <p className="text-left text-[15px] md:mb-8">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription
          </p>
        </div>
        <Link
          type="submit"
          to="/"
          className="bg-primaryColor rounded-lg w-full h-14 text-white text-sm font-bold leading-6 text-center p-4 md:hover:bg-gradient-to-r md:hover:from-thirdColor from-0% md:hover:to-fourthColor to-90% md:hover:shadow-customShadow"
        >
          Dismiss message
        </Link>
      </section>
    </main>
  );
}

export default Subscribed;
