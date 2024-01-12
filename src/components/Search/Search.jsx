import { useState } from "react"
export const Search = () => {
    // definindo constantes 
    const  [user, setUser] = useState('');
    const  [currentUser, setCurrentUser] = useState(null);
    const  [repos, setRepos] = useState(null);
    // função para buscar os usuarios pelo nickname
    const handleSearch = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser  = await userData.json();
      
            if (newUser.name){
            // pegando dados da api e passando para o front
                const{avatar_url, name, bio} = newUser;
                setCurrentUser({avatar_url, name, bio}); 

                const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
                const newRepos  = await userData.json();
            if (newRepos.lenght){
                setRepos(newRepos)
            }
        }
    }
    return (
        <div className="p-1 ml-7">
            <input placeholder="@userName" name="usuario" type="text" className="bg-slate-800 rounded-md p-1" onChange={event => setUser(event.target.value)} />
            <button onClick={handleSearch}  className="bg-slate-800 text-white font-bold ml-8 p-1 w-[98px] rounded-md  ">
                Buscar
            </button>
            {/* profile */}
            {currentUser?.name ? ( <div className=" profile   flex p-2 text-white mt-3" >
                <div>
                    <img src="https://avatars.githubusercontent.com/u/132000864?s=400&u=d53c75a22a14a1f27d777652beedd47a3350736e&v=4"  
                    alt="" className="w-20 rounded-full ml-14 border-2 border-white"  />
                </div>

                <section className="ml-12 font-semibold p-4 ">
                    <h1 className="ml-3"> Kaiqueav</h1>
                    <h3> @kaiqueav</h3>
                    <p className="text-[#9999] p-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Ratione maxime ea vitae officia doloremque.
                    </p>
                    <h1 className="font-bold text-2xl ml- mt-4">Repositorios</h1> 
 
                </section>
               
             </div>) : null}
           
        </div>
    )
}