import { ItemSuggestion } from "./compoments/ItemSuggestion"

function App() {

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
        <div className="box-home">
          <span>Olá, eu sou o</span>
          <h1>teach<span>.me</span></h1>
          <p>
            Estou aqui para te ajudar  nos seus estudos.
            Selecione um tópico sugerido ao lado ou digite um
            tópico que deseja estudar para começamos
          </p>
        </div>

        <div className="box-input">
          <textarea placeholder="Digite o tema que deseja estudar"></textarea>
          <button>Enviar pergunta</button>
        </div> 

        {/*<div className="box-chat">
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

        </div>*/}

        <footer className="box-footer">
          <p>teach<span>.me</span></p>
        </footer>

      </div>
    </div>
  )
}

export default App
