import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function AddAccount() {
    const setNavigate = useNavigate()
    let [dataForm,GetDataForm] = useState({
        
        customerName : "Fabien",
        bankName : "BOA",
        amount : 456,
        loanDate : "2024-15-45",
        loanRate : 45
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        dataForm.amount = parseInt(data.amount)
        dataForm.loanRate = parseInt(data.loanRate)
        dataForm.customerName = data.customerName
        dataForm.bankName = data.bankName
        dataForm.loanDate = data.loanDate

        console.log(JSON.stringify(dataForm))
        
        axios 
        .post("http://localhost:8088/api/v1/add",data)
        .then((res) => 
        { 
        console.log(res) 
        toast.success('Compte bancire a ete envoyer!')
        setNavigate("/Affichage")
        }
        )  
       
       
    }   
       
        
return (
    <>
   
        <Header/>

<div className='Container_ajoute'>
    <h1>Ajouter Une Compte Banqaire</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="">Nom : </label>
            <input type="text" {...register("customerName",{required: "Please enter your first name."})} placeholder='Entrez Votre Nom'/>
        </div>
        <br />
    
        <div>
            <label htmlFor="">Nom de Banque :</label>
            <input type="text" {...register("bankName")} placeholder='Entrez Votre Nom de Banque'/>        
            
        </div>
        <br />
        
        <div>
            <label htmlFor="">Montant : </label>
            <input type="number" {...register("amount")} placeholder='Entrez Votre Montant'/>        
        </div>
        <br />
        
        <div>
            <label htmlFor="">Date Prêt : </label>
            <input type="date" {...register("loanDate")} placeholder='Entrez Votre Date Prêt'/>
        </div>
        <br />    
        <div>      
            <label htmlFor="">Taux de Prêt :</label>
            <input type="number" {...register("loanRate")} placeholder='Entrez Votre Taux de Prêt'/>
        </div>
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
        <input  className='Submit' type="submit" value="ajouter"/>
    </form>
</div>
<Footer/>

    </>
    )
}
