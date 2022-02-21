import { Item } from "../Item";
import { BoxItems, BoxTitle } from "./styles";


export const BoxItem = ({title, data, itemName}) =>{    
  
    return(
        <>
            <BoxTitle>
                <h3>{title}</h3>
                <p style={{color:'#635B5B', fontSize: '14px'}}>({data.length > 0 ? data.length : 'nenhum'} {data.length > 1 ? 'itens encontrados' : 'item encontrado'})</p>
            </BoxTitle>
            <BoxItems>             
                <ul> 
                { data.length === 0 && <p style={{color:'#635B5B'}}>nenhum item encontrado</p>}
                {                
                data?.map((item, key)=>(
                    <Item key={key} data={item} itemName={itemName} />
                ))}               
                </ul>
            </BoxItems>
        </>
    );
    
}