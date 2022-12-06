import blogData from "../data/blog";

function About(props) {
  return (
    <aside>
      <img src={props.image} alt={props.alt}></img>
      <p>{props.aboutText}</p>
    </aside>
  );
}
export default About;
