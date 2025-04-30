'use server'

import { promises as fs } from 'fs'; // importa o fs.promises
import path from 'path'; // importa path para montar o caminho correto
import { v4 as uuidv4 } from 'uuid'; // para gerar nomes únicos pros arquivos
import pool from './db';

// 👉 Função auxiliar fora do postAction
async function saveFile(file) {
    if (!file || typeof file !== 'object' || file.size === 0) {
      return '';
    }
  
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];
    const ext = file.name.split('.').pop().toLowerCase();
    
    if (!allowedExtensions.includes(ext)) {
      throw new Error('Formato de imagem não permitido.');
    }
  
    if (file.size > 5 * 1024 * 1024) { // Limite de 5MB
      throw new Error('Arquivo muito grande.');
    }
  
    const now = new Date();
    const folderPath = path.join(process.cwd(), 'public', 'uploads', now.getFullYear().toString(), (now.getMonth()+1).toString(), now.getDate().toString());
  
    await fs.mkdir(folderPath, { recursive: true }); // Cria a pasta, se não existir
  
    const filename = `${uuidv4()}-${file.name}`;
    const uploadPath = path.join(folderPath, filename);
  
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
  
    await fs.writeFile(uploadPath, buffer);
  
    // Caminho que vai ser usado no frontend
    const publicPath = uploadPath.split('public')[1].replace(/\\/g, '/');
    return publicPath;
  }



export default async function postAction(prevState, formData){

   

    const title = formData.get('title');
    const description = formData.get('description');
   
    const conteudoTexto =  formData.get('content') || '';

        // Aqui pega os arquivos
    const file1 = formData.get('imagebanner1');
    const file2 = formData.get('imagebanner2');

    let imageBanner1Path = await saveFile(file1);
    let imageBanner2Path = await saveFile(file2);
        

   const conteudoArray = conteudoTexto
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .map(p => ({tipo: 'paragrafo', valor: p})); 

    const rawData = {
        title,
        description,
        imagebanner1: imageBanner1Path,
        imagebanner2: imageBanner2Path,
        content: conteudoArray,

    }

   console.log('🔁 postAction executado');
   console.log(rawData);

   try{
    await pool.query(
        'INSERT INTO posts (title, description, imagebanner1, imagebanner2, content) VALUES  ($1, $2, $3, $4, $5)',
        [title, description, imageBanner1Path, imageBanner2Path,  JSON.stringify(conteudoArray)]
    )

    return {
        error: false,
        message: 'Post cadastrado com sucesso!',
      }

   } catch(error){
         
    return {
        error: true,
        message: 'Erro ao cadastrar post',
      }
      
   }



}
