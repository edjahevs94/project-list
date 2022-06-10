import React from "react";

const List = ()=>{
    const [allProjects, setAllProjects] = React.useState([])

    async function getProjects(){
        const res = await fetch("https://task-node-api-rest.herokuapp.com/projects")
        //console.log(res)
        const data = await res.json()
        console.log(data)
        
        setAllProjects(data)
    }

    React.useEffect(() => {
        
        getProjects()
    }, [])

    return(
        <div className="card mt-3">
            <div className="card-header">
                
            </div>
            
            <div className="card-body">
                <h4> Project List</h4>
               
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Priority</th>
                            <th>Description</th>
                         
                        </tr>
                    </thead>
                    
                    <tbody>
                          
                       {allProjects.map((project) => (

                        
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.priority}</td>
                            <td>{project.description}</td>
                            
                        </tr>
                        ))}
                    </tbody>
                       
                </table>
                 </div> 
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}
export default List