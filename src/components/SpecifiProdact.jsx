import { useParams } from "react-router-dom";

function SpecifiProdact() {
    const { name, discraption } = useParams();
    
    return (
        <>  
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
            <h2>{name}</h2> 
            <h2>{discraption}</h2> 
        </>
    );
}
export default SpecifiProdact;

