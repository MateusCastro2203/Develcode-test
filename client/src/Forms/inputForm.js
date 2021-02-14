import React from 'react'
import { useForm } from 'react-hook-form'

const inputForm = () => {

    const {register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form 
            className="Form"
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
                ref={Nome}
                type="text"
                label="Nome"
                placeholder="Digite o nome do usuário"
                className="inputForm"
            />
            <label>Data de nascimento</label>
            <input
                name="Codigo"
                ref={Codigo}
                type="date"
                label="Código"
                placeholder="Digite o codigo do usuário"
                className="inputForm"
            />
            <label>Código</label>
            <input
                name="Codigo"
                ref={register}
                type="text"
                label="Código"
                placeholder="Digite o codigo do usuário"
                className="inputForm"
            />
        </form>
    )
}

export default inputForm
