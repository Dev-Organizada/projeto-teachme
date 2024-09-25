import { useState } from "react"
import { ItemSuggestion } from "./compoments/ItemSuggestion"

type ProgressType = 'pending' | 'started' | 'done'

function App() {
  const [progress, setProgress] = useState<ProgressType>('pending')
  const [textarea, setTextarea] = useState<string>('')

  function handleSubmitChat() {
    if (progress === "pending") {
      setProgress("started")
    }
  }

  return (
    <div className="conteiner">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <ItemSuggestion title="HTML" />
          <ItemSuggestion title="CSS" />
          <ItemSuggestion title="JavaScript" />
          <ItemSuggestion title="TypeScript" />
        </details>

        <details open className="historic">
          <summary>Histórico</summary>
        </details>

      </div>

      <div className="content">
        {progress === 'pending' && (

            <div className="box-home">
              <span>Olá, eu sou o</span>
              <h1>teach<span>.me</span></h1>
              <p>
                Estou aqui para te ajudar  nos seus estudos.
                Selecione um tópico sugerido ao lado ou digite um
                tópico que deseja estudar para começamos
              </p>
            </div>
          )}

        

          {progress !== 'pending' && (
          <div className="box-chat">
            <h1>Você está estudando sobre <span>HTML</span></h1>

            <div className="question">
              <h2>Pergunte</h2>
              <p>
                Aqui vai ser a pergunta
              </p>
            </div>

            <div className="answer">
              <h2>Sua Resposta</h2>
              <p>
                Aqui será sua Resposta.
              </p>
            </div>

            <div className="feedback">
              <h2>Feedback teach<span>.me</span></h2>
              <p>
                Aqui será o feedback.
              </p>
              <div className="action">
                <button>Estudar novo tópico</button>
              </div>
            </div>
         </div> 
      )}

        <div className="box-input">
          <textarea 
            value={textarea}
            onChange={element => setTextarea(element.target.value)}
            placeholder={progress === 'started' ? "Insira sua resposta..." : "Insira o tema que deseja estudar..."}
            />
          <button onClick={handleSubmitChat}>{progress === 'pending' ? 'Enviar Pergunta' : 'Enviar Resposta'}</button>
        </div>


        <footer className="box-footer">
          <p>teach<span>.me</span></p>
        </footer>

      </div>
    </div>
  )
}

export default App
