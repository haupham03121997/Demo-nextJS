import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function User(){
    const router =  useRouter();
    console.log("router" , router.query.userId);
    const handleClick = ()=>{
        router.push("/login");
    }
    return(
        <>
        <h1>
            Admin User : {router.query.userId}
            
        </h1>
        <button onClick={()=> {
            router.push("/admin/posts")
        }}>
            go to another pages
        </button>
        <button onClick={handleClick}>
            Go to ogin page
        </button>
        <Link  href="/admin/posts"> 
            <a >GO to admin</a>
        </Link>
        </>
        
    )
}