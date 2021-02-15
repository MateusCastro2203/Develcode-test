import React from 'react'
import './input.css'
import  Axios  from 'axios'
import { useForm } from 'react-hook-form'

const InputForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        Axios.post('http://localhost:3001/user',{COD: data.Codigo, NAME:data.Nome,DATE: data.Data, PHOTO: data.Foto}).then(()=>{
            alert('Cadastro feito com sucesso')
        })
        
    }

    return (
        <div className="modal">
            <form
                className="Form"
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
                
            >
                <label>Código</label>
                <input
                    name="Codigo"
                    ref={register}
                    type="text"
                    label="Código"
                    placeholder="Digite o código do usuário"
                    className="inputForm"
                />
                <label>Nome</label>
                <input
                    name="Nome"
                    ref={register}
                    type="text"
                    label="Nome"
                    placeholder="Digite o nome do usuário"
                    className="inputForm"
                />
                <label>Data de nascimento</label>
                <input
                    name="Data"
                    ref={register}
                    type="date"
                    label="Código"
                    placeholder="Digite o codigo do usuário"
                    className="inputForm"
                />
                <label>Foto</label>
                <input
                    name="Foto"
                    ref={register}
                    type="file"
                    label="Código"
                    placeholder="Digite o codigo do usuário"
                    className="inputForm"
                />
                <input type="submit" className="button"/>
            </form>
        </div>
    )
}

export default InputForm
