
export default function Profile(props) {
    
  return (
    <>
      <h1>{props.fullName}</h1>
      <h2>{props.bio} </h2>
      <h3>{props.profession}</h3>
          <h6>my img is {props.Children}</h6>
          {props.Handlename()}
    </>
  );
}
