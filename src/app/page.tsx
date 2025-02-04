import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async() => {
  const res = await fetch("http://localhost:3000/api/blogs",{
    next:{
      revalidate:20
    }
  });
  const data = await res.json();
  return (
    <div className="my-10">
      <LatestBlogs blogs={data} />
    </div>
  );
};

export default HomePage;
