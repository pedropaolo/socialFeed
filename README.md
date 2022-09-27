# socialMediaDashboard

# Estrutura base

A estrutura base do projeto foi criada com a utilização do Vite, ferramenta de construção de código que pode ser acessada em : https://vitejs.dev/guide/;

<!-- Sequência para processo de criação de um projeto do zero -->

-- $ npm create vite@latest --

<!-- Abertura de um projeto já existente -->

-- npm install --

-- npm run dev --


# Biblioteca de íCones

phospor-react: https://phosphoricons.com/
-- npm i phosphoct



# Forms

   <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong className={styles.comment}>Deixe seu feedback</strong>

                <textarea
                 placeholder='Deixe um comentário' 
                <!-- IDENTIFICA O ELEMENTO 
                É possível acessa-lo com event.target.nome_escolhido
                -->

                 name="comment"

                 <!-- Cria o evento (event.target). Quando o texto muda, executa-se a função handleNewcomment-->

                 onChange={handleNewComment}

                 <!-- O campo value assume o mesmo valor da variável de estado de apoio criada, que armazena o value (event.target.value) -->
                 value={newComment}></textarea>

                <!-- Button deve ter a flag submit -->
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

    
    <!-- Hooks de estado criados para o formulário! O primeiro armazena os comentários ja existentes (Que poderiam vir de uma API por exemplo)
    
    O segundo Acompanha o mesmo valor do campo value, que captura o que foi digitado pelo usuário no inputtext-->


    const [comment , writeComment ] = useState([
            'Você é fonomeno mlq doido!'
        ]);

    const [newComment, setNewComment] = useState('');

    <!-- event.preventDefault() Previne o comportamento padrão dos formulários HTML, que dão refresh na página sempre que o form é submetido -->

    <!-- Primeira função copia todo o conteudo anterior do array de estado original e adiciona o novo comentário ao final do array
    
    Limpa o valor de newComment. Isso também limpa o valor de value no inputtext -->
        

    function handleCreateComment() {

        event.preventDefault()

        writeComment([...comment, newComment ])
        setNewComment('');

    }

    <!-- Adiciona o valor digitado pelo usuário dentro do estado de apoio -->


    function handleNewComment() {

        event.preventDefault()

        setNewComment(event.target.value)
    }



