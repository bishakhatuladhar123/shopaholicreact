export const TextInput=({type="text",clasName="border border-gray-300 w-full p-2 rounded-md shadow bg-white ",name="",placeholder="", errMsg=""})=>{
    return(
        <>
        <input type={type}  className={clasName} name={name} placeholder={`Enter you ${name}...`} />
        <span className="text-red-800 tex-sm italic"></span>
        
        </>
    );
}