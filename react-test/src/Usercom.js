function Usercomp()
{
    return(
        <div>
            <h1>this usercompoent</h1>
            </div>
    )
}
export function Userdetails(props)
{
    return (
        <div>
            <h4>UserName : {props.userobj.name}</h4>
            <h4>UserName age : {props.userobj.age}</h4>
        </div>
    )
}
export function Userdetailstwo({userobj})
{
    return (
        <div>
            <h4>UserName : {userobj.name}</h4>
            <h4>UserName age : {userobj.age}</h4>
        </div>
    )
}

export default Usercomp;