//import blogData from "../data/blog";

function About({
  srcparameter = "https://via.placeholder.com/215",
  altparameter,
  aboutText,
}) {
  return (
    <aside>
      <img src={srcparameter} alt={altparameter}></img>
      <p>{aboutText}</p>
    </aside>
  );
}
export default About;
