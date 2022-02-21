import { Container } from "./styles";

export const Item = ({data, itemName}) =>{

    switch(itemName){
        case 'equipaments':           
            return(
                <Container>           
                    <div style={{width:'25%'}}><p style={{color:'#BB201E'}}>#{data.equipmentID}</p></div>
                    <div style={{width:'75%'}}><p>{data.equipmentName}</p></div>
                    <div style={{width:'0'}}></div>              
                </Container>
            );        
        case 'materials':           
            return(
                <Container>           
                    <div style={{width:'25%'}}><p style={{color:'#BB201E'}}>#{data.materialID}</p></div>                    
                    <div style={{width:'75%'}}><p>{data.materialName}</p></div>
                    <div style={{width:'0'}}></div>
                </Container>
            );
        case 'purchase_orders':
            return(
                <Container>    
                    <div style={{width:'20%'}}><p style={{color:'#BB201E'}}>#{data.materialID}</p></div>
                    <div style={{width:'55%'}}><p>{data.materialName}</p></div>
                    <div style={{width:'37%'}}><p>Qtd: {data.quantity} pç</p></div>
                </Container>
            );
        case 'sales_orders':            
            return(
                <Container>           
                    <div style={{width:'20%'}}><p style={{color:'#BB201E'}}>#{data.materialID}</p></div>
                    <div style={{width:'60%'}}><p>{data.materialName}</p></div>
                    <div style={{width:'25%'}}><p>Qtd: {data.quantity} pç</p></div>
                </Container>
            );
        case 'workforce':
            return(
                <Container>           
                    <div style={{width:'15%'}}><p style={{color:'#BB201E'}}>#{data.workforceID}</p></div>
                    <div style={{width:'60%'}}><p>{data.name}</p></div>
                    <div style={{width:'25%'}}><p>{data.shift}</p></div>
                </Container>
            );
    }

    
}