import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Your Ultimate Prompts Database
            <br className="max -md:hidden"/>
            <span className="orange_gradient text-center">
                "Manage Prompts Like Pro"
            </span>
        </h1>
        <p className="desc text-center">
            The only tool you will ever need to manage and scale your <b>AI Powered Business Ops</b>.
        </p>

        < Feed />
    </section>
  )
}

export default Home
