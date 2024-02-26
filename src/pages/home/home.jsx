import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo";
import { Button, Card } from "antd";
import Hero from "../../assets/hero.svg";
import Widget from "../../components/widget/widget";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="flex justify-between items-center py-8">
            <div>
              <Link to={"../"}>
                <div className="logo">
                  <Logo />
                  <span>Conva.</span>
                </div>
              </Link>
            </div>

            <div className="flex gap-10 items-center">
              <Link to="./sign-in">
                <Button className="rounded-full h-12 px-8"> Sign in </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero py-14 md:py-0">
        <div className="container">
          <div className="md:grid md:my-20 my-0  lg:my-0 grid-cols-2 items-center">
            <div className="col-span-1">
              <h1 className=" lg:text-6xl text-5xl md:text-4xl vvx-slide font-black leading-snug  text-[#303031]">
                Engage users,
                <br /> Receive Feedback & generate leads
              </h1>
              <p className="text-lg mb-8 mt-2 text-slate-600">
                Understand your users by hearing what they feel about your
                product through various methods and generate leads for future
                campaigns
              </p>
              <div className="mt-4">
                <Link to="./sign-up">
                  <Button className="bg-blue-500 h-14 text-white font-bold px-10 rounded-full">
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                alt="heroimg"
                className="relative h-full w-full md:mt-[-50px]"
                src={Hero}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about mt-4 py-20">
        <div className="container">
          <div className="flex justify-center mb-14">
            <div className="text-center md:w-[60%]">
              <h3 className="text-2xl font-black">
                Let users express the way they know how to
              </h3>
              <p className="text-base text-slate-500 py-2">
                Select from a variety of campaign types to suit your specific
                feedback needs, from generating leads to understanding user
                emotions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 justify-center items-center gap-4 ">
            <div className="md:col-span-1 col-span-3">
              <Card className=" listbox py-14 shadow-sm hover:bg-blue-50">
                <div className="text-center ">
                  <div className="emoji5 h-10 w-10"></div>
                  <h3 className="text-lg font-bold mt-4 mb-2">
                    Emotions feedback
                  </h3>
                  <p className="text-slate-600 text-left">
                    A concise way for users to express their feelings or
                    reactions. Whether it’s a smiley face, a heart, or a
                    thumbs-up, emojis convey emotions instantly.
                  </p>
                </div>
              </Card>
            </div>
            <div className="md:col-span-1 col-span-3">
              <Card className="listbox py-14 shadow-sm hover:bg-blue-50">
                <div className="text-center ">
                  <div className="rating ">
                    <span className="p-3"></span>
                  </div>
                  <h3 className="text-lg font-bold mt-4 mb-2">
                    Ratings feedback
                  </h3>
                  <p className="text-slate-600 text-left">
                    Receive a clear visual representation of user satisfaction.
                    assess the quality of a product, service, or content to
                    build trust and aid decision making.
                  </p>
                </div>
              </Card>
            </div>
            <div className="md:col-span-1 col-span-3">
              <Card className="listbox py-14 shadow-sm hover:bg-blue-50">
                <div className="text-center ">
                  <div className="vote2 h-10 w-10"></div>
                  <h3 className="text-lg font-bold mt-4 mb-2">
                    Voting feedback
                  </h3>
                  <p className="text-slate-600 text-left">
                    By tracking likes and dislikes, you can tailor content
                    recommendations. Popular content receives more likes,
                    enhancing user experience.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="about mt-4 py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-24 justify-between items-center">
            <div className="col-span-2 md:col-span-1">
              <Widget
                boxbg={"bg-blue-50"}
                allowEmail={false}
                allowName={false}
                allowText={true}
                campTitle={"How do you feel?"}
                campSubtitle={"tell us what you think about our app"}
                activeTye={"emoji"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className=" mb-10">
                <div className=" ">
                  <h3 className="text-2xl font-black">
                    Get Started in three easy steps
                  </h3>
                  <p className="text-base text-slate-500 py-2">
                    Set up a campaign in less than 5 minutes.
                  </p>
                </div>
              </div>
              <ul>
                <li className="mb-6">
                  <h3 className="font-black">1. Configure your campaign</h3>
                  <p className="text-slate-500 mt-2">
                    Define the purpose and scope of your campaign. Decide what
                    you want to collect feedback on.
                  </p>
                </li>
                <li className="mb-6">
                  <h3 className="font-black">2. Embedd to app</h3>
                  <p className="text-slate-500 mt-2">
                    Integrate the feedback widget into your app or website by
                    pasting one line of code.
                  </p>
                </li>
                <li>
                  <h3 className="font-black">3. Receive Feedback</h3>
                  <p className="text-slate-500 mt-2">
                    Use the insights gained to enhance your product, content, or
                    services based on user preferences and sentiments.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-20 rounded-3xl items-center py-24 px-10 bg-[#181206]">
            <div className="flex justify-center">
              <div className="text-center">
                <h1 className="text-4xl text-white font-black">
                  Receive feedback now.
                </h1>
                <Link to="./sign-up">
                  <Button
                    type="primary"
                    className="mt-6 h-12 px-10  text-white font-bols rounded-full"
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
