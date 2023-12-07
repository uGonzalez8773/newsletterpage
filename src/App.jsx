import mobileBG from "./assets/illustration-sign-up-mobile.svg";
import desktopBG from "./assets/illustration-sign-up-desktop.svg";
import CheckListItem from "./components/CheckListItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);
    setShowError(!isValid);

    if (isValid) {
      navigate("/subscribed", { state: { email: email } });
    } else {
      console.log("Correo electrónico no válido");
    }
  };
  return (
    <>
      <main className=" md:bg-primaryColor md:h-screen md:flex ">
        <div className="md:flex md:flex-row-reverse md:w-8/12 md:h-auto md:items-center md:mx-auto md:my-auto md:bg-white rounded-[36px] md:p-5 gap-7">
          <header>
            <picture>
              <source media="(min-width:480px)" srcSet={desktopBG} />
              <img
                src={mobileBG}
                alt="main background"
                className="w-screen md:w-full"
              />
            </picture>
          </header>
          <article className="font-mainFont flex flex-col p-4 gap-5 text-primaryColor md:p-6 ">
            <h1 className="text-4xl font-bold mt-5 md:text-[54px]">
              Stay updated!
            </h1>
            <p className="text-[15px] font-medium leading-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <section className="flex flex-col items-start">
              <CheckListItem text="Product discovery and building what matters" />
              <CheckListItem text="Measuring to ensure updates are a success" />
              <CheckListItem text="And much more!" />
            </section>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-1"
            >
              <p className="font-bold text-xs text-primaryColor leading-5">
                Email address
              </p>
              <input
                type="text"
                placeholder="email@company.com"
                className="p-5 h-14 border-2 w-full md:mb-3"
                value={email}
                onChange={handleEmailChange}
              />
              {showError && !isValidEmail && (
                <p className="text-red-700 p-2 font-mainFont text-sm border-2 border-red-700 text-center rounded-xl w-full mt-2 mb-2 md:mb-3">
                  Please provide a valid email
                </p>
              )}
              <button
                type="submit"
                className="bg-primaryColor rounded-lg w-full h-14 text-white text-sm font-bold leading-6 text-center p-4 mb-6 mt-1 md:hover:bg-gradient-to-r md:hover:from-thirdColor from-0% md:hover:to-fourthColor to-90% md:hover:shadow-customShadow"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
