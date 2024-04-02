//import React, { useState,useEffect } from 'react'
//import { useForm } from "react-hook-form"
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// export default function Edit() {
//     const setNavigate = useNavigate()
//     const [data,setdata] = useState("");
//     const {id} = useParams();
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm()
    
//     useEffect( () => {
//         axios
//         .get(`http://localhost:8088/api/v1/all/${id}`)
//         .then((res) => {
//             setdata(res.data)      
//         }) 
//     },[id,setdata])


//     function onSubmit (data){
//         try {
//             axios
//                 .put(`http://localhost:8088/api/v1/edit/${id}`,data)
//                 .then((res) => {console.log(res)
//                     toast.success('Compte bancire a ete Modifier!') 
//                     props.laEditHide("hide")
//                     setNavigate("/Affichage")
//                 })         
//             }
//         catch(errors){
//             console.error(errors)
//             toast.error("Une erreur s'est prodduite ")
//         }
//     }

//     console.log(data)
//     return (
//     <>
//         <div className='Container_edit'>
//             <h1>Modifier Une Compte Banqaire</h1>
   
            
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <label htmlFor="">Nom de Client: </label>
//                     <input type="text"{...register("customerName")} value={"PUTAIN"/*data[0].customerName*/} placeholder='Entrez Votre Nom' />
//                 </div>
                
//                 <br />

//                 <div>
//                     <label htmlFor="">Nom de Banque :</label>
//                     <input type="text"  {...register("bankName")} placeholder='Entrez Votre Nom de Banque' />        
                    
//                 </div>
//                 <br />
                
//                 <div>
//                     <label htmlFor="">Montant : </label>
//                     <input type="text"  {...register("amount")} placeholder='Entrez Votre Montant' />        
//                 </div>
//                 <br />
                
//                 <div>
//                     <label htmlFor="">Date Prêt : </label>
//                     <input type="date" {...register("loanDate")} placeholder='Entrez Votre Date Prêt' />
//                 </div>
//                 <br />    
//                 <div>      
//                     <label htmlFor="">Montant a Payer :</label>
//                     <input type="text"  {...register("loanRate")} placeholder='Entrez Votre Taux de Prêt'/>
//                 </div>
//                     <br />
//                     {errors.exampleRequired && <span>This field is required</span>}
//                 <input  className='Submit' type="submit" value="Modifier"/>
//             </form>
//         </div>
//        <Footer />


//     </>
//     )
// }

import React, { useState,useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


 export default function Edit() {
const { register, handleSubmit, setValue , formState: { errors }} = useForm();
const [formData, setFormData] = useState(null);
const setNavigate = useNavigate()
const {id} = useParams();

useEffect(() => {
    axios.get(`http://localhost:8088/api/v1/all/${id}`)
      .then(response => {
            setFormData(response.data);
        
        })
      .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
          });
      } , [])

    if (formData != null) {
            setValue('customerName', formData[0].customerName);
            setValue('bankName', formData[0].bankName);
            setValue('amount', formData[0].amount);
            setValue('loanDate', formData[0].loanDate);
            setValue('loanRate', formData[0].loanRate);
    }
    
    // setValue('input2', 'Valeur par défaut pour input 2'
    const [a,seta] =useState() 
    function handlekey(e) {
   seta(e.prevent.default())
      } 
    const onSubmit = data => {
            axios
                .put(`http://localhost:8088/api/v1/edit/${id}`,data)
                .then((res) => {console.log(res)
                    toast.success('Compte bancire a ete Modifier!') 
                  
                    
                    if (formData != null) {
                        setValue('customerName', a);
                        setValue('bankName', formData[0].bankName);
                        setValue('amount', formData[0].amount);
                        setValue('loanDate', formData[0].loanDate);
                        setValue('loanRate', formData[0].loanRate);
                        setNavigate("/Affichage")
                }
            })  
            
  };
 

  return (
    <>
            <div className='Container_edit'>
                <h1>Modifier Une Compte Banqaire {id} </h1>
       
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">Nom de Client: </label>
                        <input type="text"{...register("customerName",{min:3})} onChange={handlekey} placeholder='Entrez Votre Nom' />
                    </div>
                    <h1>{errors.customerName && <h1>Ce champ est requis.</h1>} </h1>
                    
                    <br />
    
                    <div>
                        <label htmlFor="">Nom de Banque :</label>
                        <input type="text"  {...register("bankName",{min:3})} placeholder='Entrez Votre Nom de Banque' />        
                        
                    </div>
                    <br />
                    
                    <div>
                        <label htmlFor="">Montant : </label>
                        <input type="number"  {...register("amount") } placeholder='Entrez Votre Montant' />        
                    </div>

                    <br />
                    
                    <div>
                        <label htmlFor="">Date Prêt : </label>
                        <input type="date" {...register("loanDate")} placeholder='Entrez Votre Date Prêt' />
                    </div>
                    <br />    
                    <div>      
                        <label htmlFor="">Taux de Pret :</label>
                        <input type="number"  {...register("loanRate")} placeholder='Entrez Votre Taux de Prêt'/>
                    </div>
                        <br />
                        
                    <input  className='Submit' type="submit" value="Modifier"/>
                </form>
            </div>
          
    
    
        </>
  )
 }
