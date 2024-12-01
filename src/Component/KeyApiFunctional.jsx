import { useEffect , useState } from "react";

const Fetchingdata =() =>{
const [data , setData] =useState([])

    async function getData(){
        try{
            const response = await fetch('https://reqres.in/api/users?page')
            console.log(response)
            const result = await response.json()
            console.log(result)
            //setData(result)
            setData(result.data);
        }catch(error){
            console.log(error)
     }
  }
    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="mx-auto w-50">
            <h1>Learn How to fetch Data</h1>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td>
                                        <img src={user.avatar} alt={user.first_name} />
                                    </td>
                                </tr>
                            )        
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Fetchingdata;
