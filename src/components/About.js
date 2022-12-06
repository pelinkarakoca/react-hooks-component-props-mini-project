//import blogData from "../data/blog";

function About({ src = "https://via.placeholder.com/215", alt, about }) {
  return (
    <aside>
      <img src={src} alt={alt}></img>
      <p>{about}</p>
    </aside>
  );
}
export default About;
