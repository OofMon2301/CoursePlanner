import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      UQ Navigator
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Course Planner</span>
    </h1>
    <p className='desc text-center'>
      UQ Navigator is a course planner for UQ students. It allows you to plan your degree semester by semester, and
        provides you with a visualisation of your degree progression. It also allows you to share your degree plan with
        others, and view degree plans created by other students.

    </p>

    <Feed />
  </section>
);

export default Home;
