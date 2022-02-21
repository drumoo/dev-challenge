import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/logo_multisearch.png';
import imgSearch from './assets/images/search.png';
import { BoxItem } from './Components/BoxItem';
import * as C from './Styles/styles';
import { api } from './hooks/api';


function App() {

  const [inputSearch, setInputSearch] = useState('');
  const [salesOrders, setSalesOrders] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [workforce, setWorkforce] = useState([]);
  const [numResults, setNumResults] = useState(0);

  useEffect(()=>{
 
    loadApi(inputSearch);  

  },[inputSearch])

  const loadApi = async (key) => {

    let equipmentsApi = await api.getEquipments(key);
    let materialsApi = await api.getMaterials(key);
    let purchaseOrdersApi = await api.getPurchaseOrders(key);
    let salesOrdersApi = await api.getSalesOrders(key);
    let workforceApi = await api.getWorkforce(key);
    
    setEquipments(equipmentsApi);
    setMaterials(materialsApi);
    setPurchaseOrders(purchaseOrdersApi);
    setSalesOrders(salesOrdersApi);
    setWorkforce(workforceApi);    

    setNumResults(equipmentsApi.length + materialsApi.length + purchaseOrdersApi.length + salesOrdersApi.length + workforceApi.length);
  }

  const handleSearch = (e) =>{
    setInputSearch(e.target.value);          
  }

  return (
    <div className="App">
      <C.Header>
            <img src={logo} />
            <C.Search>
                <C.Input onChange={handleSearch} />
                <a><img src={imgSearch} alt="Lupa" /></a>
            </C.Search>
      </C.Header>
      <C.Text className='num-results'>Foram encontrados {numResults} resultados:</C.Text>

      <BoxItem title='Pedidos de Venda' data={salesOrders} itemName='sales_orders'/>
      <BoxItem title='Pedidos de Compra' data={purchaseOrders} itemName='purchase_orders' />
      <BoxItem title='Produtos' data={materials} itemName='materials' />
      <BoxItem title='Equipamentos' data={equipments} itemName='equipaments' />
      <BoxItem title='Mão de obra' data={workforce} itemName='workforce' />
      
    </div>
  );
}

export default App;
