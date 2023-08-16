const HomePage = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome to
            <br className="hidden lg:inline-block" />
            Applied Fluids Group
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, optio dolores. Voluptas sequi, rerum ea, voluptates tempora debitis ipsam doloribus sit vero nulla consequuntur? Culpa exercitationem asperiores rerum alias deleniti voluptatibus enim laborum, cupiditate maxime modi autem aliquid quis aliquam eos veniam tempora quidem tempore dicta ipsum tenetur accusamus quisquam doloremque? At, sint facilis. Eligendi quo, laborum tenetur facere quia sit assumenda sunt, quidem fuga qui odit nostrum quos? Et inventore hic cumque molestias nesciunt, necessitatibus possimus aspernatur corporis velit vitae quod, excepturi saepe reprehenderit? Ex repellendus delectus sapiente fugit vel, corporis cupiditate fugiat beatae vitae sunt. Nesciunt, laborum tempore!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
