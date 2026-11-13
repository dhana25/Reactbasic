import Usecustom from "./Usecustom"

const Userlist = () => {

    const {data,load,err} = Usecustom('https://jsonplaceholder.typicode.com/users')
    
    
    return (
        <>
         <h3>Use Custom</h3>
         {
           data && data.map((val,index) => {
                return (
                    <div key={index}>
                        <p>Name : {val.name}</p>
                        <p>User Name : {val.username}</p>
                        <p>Email : {val.email}</p>
                        <hr></hr>
                    </div>
                )
            })
         }
        </>
    )

}

export default Userlist