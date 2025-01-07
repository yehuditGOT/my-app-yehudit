import { useParams } from "react-router-dom";

function SpecifiProdact() {
    const { pName, discraption } = useParams();
    
    return (
        <>   
            <h2>{pName}</h2> 
            <h2>{discraption}</h2> 
        </>
    );
}
export default SpecifiProdact;

