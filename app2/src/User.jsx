function User()
{
    return "this user compoent";
}
export function Userdata(props) {
  console.log(props);
  return (
    <div>
      <p>Name: {props.userobj.name}</p>
      <p>Age: {props.userobj.age}</p>
      <p>Email: {props.userobj.email}</p>
    </div>
  );
}

export function Userdatatwo({userobjtwo}) {
  console.log(userobjtwo);
  return (
    <div>
      <p>Name: {userobjtwo.name}</p>
      <p>Age: {userobjtwo.age}</p>
      <p>Email: {userobjtwo.email}</p>
    </div>
  );
}

export function Wrapper()
{
    return(
        <h1 style={{color:"green",border:"1px solid",width:"1000px"}}>this wrapper</h1>
    )
}


export default User;