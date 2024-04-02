import React, { useState,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer';
import { MdDeleteForever } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function Affichage() {
  const [max,setMax] = useState(0);
  const [conf,setConf] = useState(""); 
  const [hide, setHide] = useState("hide");
  const [donneeEdit,setdonneeEdit] = useState({});
  const [data,setdata] = useState("");
  const setNavigate = useNavigate()
   
  const [dataBack,SetDataBack] = useState([]) 
  const [dataBackminmax,SetDataBackminmax] = useState([]) 
  useEffect(() => {
    axios.get("http://localhost:8088/api/v1/all")
        .then((res) => {
              SetDataBack(res.data)
        })
    axios.get("http://localhost:8088/api/v1/minMax")
        .then((res) => {
              SetDataBackminmax(res.data)
        })    
    }, []);  
  function Edit(id){
    setNavigate(`/Affichage/${id}`)
  }

  const EditHide = (donne) => {
    setdata(donne)
    setHide(data)
  } 

  function deleteCompte(tr){
    console.log(tr)
    axios
    .delete(`http://localhost:8088/api/v1/delete/${tr}`)
    .then(() => {   
      setTimeout(() => {
        window.location.reload()
      }, "1");
      setInterval(() => 
        {
          toast.success('Compte bancire a ete Suprimer!')  
        }
      )()
  
     
      
    })
    
    
  }

  return (
    <>
        <Header />
    
       
        
        <div className='Container_Affichage'>    
            <h1>Affichage</h1>
          <table>
          <thead>
            <tr>
              <td>Numero de Compte</td>
              <td>Nom de Client</td>
              <td>Nom de Banque</td>
              <td>Montant</td>
              <td>Date Pret</td>
              <td>Montant a payer</td>
              <td>Modificatoion</td>
              <td>Suppresion</td>
            </tr>
          </thead>
          <tbody>
            {
              dataBack.map((item) => (<tr className={item.accountNumber % 2 ? "Paire" :"Impaire"} key={item.accountNumber}>
                                      <td className='numacount'>000{item.accountNumber}</td>
                                      <td> {item.customerName} </td>
                                      <td> {item.bankName} </td>
                                      <td> {item.amount}$</td>
                                      <td > {item.loanDate} </td>
                                      <td> {item.amountPaid}$ </td>
              <td className='td_edit'>   <RiFileEditFill  onClick={(() => Edit(item.accountNumber))} className="Edit"/>   </td>
              <td className='td_delete'> 
                <MdDeleteForever className="Delete" onClick={() => deleteCompte(item.accountNumber)}/>
              </td>
            </tr> ))
            }
           
            
          </tbody>
        </table>
        <br /><br />
        <table>
          <thead>
           <tr>
                <td>Motant A payer Total</td>
                <td>Minimal</td>
                <td>Maximum</td>
                    </tr>
          </thead>
          <tbody>
  
            <tr  key={ dataBackminmax[0]}>
              <td>{ dataBackminmax[2]} </td>
              <td> { dataBackminmax[0]} </td>
              <td> { dataBackminmax[1] } </td>
            
            </tr>
          
          </tbody>
        </table>
       
        
      </div>
      <Footer />  
        
      
    </>
  )
}
