import { Header } from "../components/Header/Header"
import { ListRepo } from "../components/ListRepo/ListRepo"
import { Profile } from "../components/Profile/Profile"
import { Search } from "../components/Search/Search"
 

export const Page = () =>{
    return (
        <>
        <Header/>
        <Search/>
        <Profile/>   
        <ListRepo title="teste" description="pega avbiisõa" />
        </>
    )
}