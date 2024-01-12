
import { useState } from "react";
import { Header } from "../components/Header/Header"
import { ListRepo } from "../components/ListRepo/ListRepo"
// import { Profile } from "../components/Profile/Profile"
// import { Search } from "../components/Search/Search"
 

   
export const Page = () =>{
    
// definindo constantes 
const  [user, setUser] = useState('');
const  [currentUser, setCurrentUser] = useState(null);
const  [repos, setRepos] = useState(null);
// função para buscar os usuarios pelo nickname
const handleSearch = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser  = await userData.json();
     
    const userRepos  = await fetch(newUser.repos_url);
    const reposistorio = await userRepos.json();

    setRepos(reposistorio)
    setCurrentUser(newUser)
}
    //     if (newUser.name){
    //     // pegando dados da api e passando para o front
    //         const{avatar_url, name, bio, login} = newUser;
    //         setCurrentUser({avatar_url, name, bio, login}); 

    //         const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    //         const newRepos  = await reposData.json();
    //     if (newRepos.lenght){
    //         setRepos(newRepos)
    //     }
    // }


    return (
        <>
        <Header/>

        <div className="p-1 ml-7">
            <input placeholder="@userName" 
            name="usuario" type="text" className="bg-slate-800 rounded-md p-1" onChange={event => setUser(event.target.value)} />]

            
            <button onClick={handleSearch}  className="bg-slate-800 text-white font-bold ml-8 p-1 w-[98px] rounded-md  ">
                Buscar
            </button>
            {/* usuarios */}
            {currentUser?.name ? ( <div className=" profile   flex p-2 text-white mt-3" >
                <div>
                    <img src={currentUser.avatar_url}  
                    alt="" className="w-20 rounded-full ml-14 border-2 border-white"  />
                </div>

                <section className="ml-12 font-semibold p-4 ">
                    <h1 className="ml-3"> {currentUser.name}</h1>
                    <h3> {currentUser.login} </h3>
                    <p className="text-[#9999] p-1">
                    {currentUser.bio}
                    </p>

                </section>
               
             </div>) : null}
              
             
             {repos?.length ? (   
                         <div>
                            <h1 className="font-bold text-2xl ml- mt-4">Repositorios</h1> 
                              {repos.map(repo=>{
                              <ListRepo title={repo.name} description={repo.description}/>
                               })}                       
                        </div>
                         ):null}
        </div>
        </>
         
    )
}