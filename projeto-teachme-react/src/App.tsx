import { useState } from "react"
import { ItemSuggestion } from "./compoments/ItemSuggestion"

type ProgressType = 'pending' | 'started' | 'done'


function App() {
  const [progress, setProgress] = useState<ProgressType>('pending')
  const [textarea, setTextarea] = useState<string>('')
  const [chat, setChat] = useState<string[]>([])

  function resertChat(){
    setProgress('pending')
    setChat([])
  }

  function handleSubmitChat() {
    if (!textarea){
      return
    }

    const message = textarea
    setTextarea('')

    if (progress === "pending") {
      setChat(text => [...text, message])
      setChat(text => [...text, 'Pergunta gerada por IA'])

      setProgress("started")
      return
    }

    setChat(text => [...text, message])
    setChat(text => [...text, 'Feedback gerado por IA'])

    setProgress('done')

  }

  return (
    <div className="conteiner">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <ItemSuggestion title="HTML" onClick={() => setTextarea('HTML')}/>
          <ItemSuggestion title="CSS" onClick={() => setTextarea('CSS')}/>
          <ItemSuggestion title="JavaScript" onClick={() => setTextarea('JavaScript')}/>
          <ItemSuggestion title="TypeScript" onClick={() => setTextarea('TypeScript')}/>
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
            {chat[0] && (
              <h1>Você está estudando sobre <span>{chat[0]}</span></h1>
            )}

            {chat[1] && (
              <div className="question">
              <h2>Pergunta</h2>
              <p>{chat[1]}</p>
            </div>
            )}

            {chat[2] && (
              <div className="answer">
              <h2>Sua Resposta</h2>
              <p>{chat[2]}</p>
            </div>
            )}

            {chat[3] && (
              <div className="feedback">
              <h2>Feedback teach<span>.me</span></h2>
              <p>{chat[3]}</p>
              <div className="action">
                <button onClick={resertChat}>Estudar novo tópico</button>
              </div>
            </div>
            )}

         </div> 
      )}

      {progress !== 'done' && (
        <div className="box-input">
        <textarea 
          value={textarea}
          onChange={element => setTextarea(element.target.value)}
          placeholder={progress === 'started' ? "Insira sua resposta..." : "Insira o tema que deseja estudar..."}
          />
        <button onClick={handleSubmitChat}>{progress === 'pending' ? 'Enviar Pergunta' : 'Enviar Resposta'}</button>
      </div>
      )}


        <footer className="box-footer">
          <p>teach<span>.me</span></p>
        </footer>

      </div>
    </div>
  )
}

export default App
