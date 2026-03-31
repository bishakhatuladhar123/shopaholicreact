
import logo from "../../assets/images/ShopaholicLogo.jpg"

export default function Logo({className="size-50"}:Readonly <{className?:string}>){
    return(
        <img src={logo} alt="" className={`rounded-full ${className}`}/>
    );
}