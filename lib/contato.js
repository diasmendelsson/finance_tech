'use server'
import poolContato from "./dbContato";


export default async function contato(prevState, formData){

    const nome = formData.get('nome');
    const email = formData.get('email');
    const mensagem = formData.get('mensagem');

    const dados = {
        nome,
        email,
        mensagem,
    }

    console.log(dados);

    try {
        await poolContato.query(
            'INSERT INTO contato_blog (nome, email, mensagem) VALUES ($1, $2, $3)',
             [nome, email, mensagem]
        )

        return{
            error: false,
            message: 'Mensagem enviada com sucesso!',
        } 
    } catch (error) {
         console.error('Erro ao enviar mensagem:', error)
        return {
            error: true,
            message: 'Desculpe, algo não saiu certo',
        }
    }

   
}