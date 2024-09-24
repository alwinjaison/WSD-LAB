import "bulma/css/bulma.css";
import CardPage from "./CardPage";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <CardPage
                title="Alexa"
                handler="@alexa"
                image={AlexaImage}
                description="Alexa was created by Amazon"
              />
            </div>
            <div className="column is-4">
              <CardPage
                title="Cortona"
                handler="@cortona"
                image={CortonaImage}
                description="Cortona was created by Microsoft"
              />
            </div>
            <div className="column is-4">
              <CardPage
                title="Siri"
                handler="@siri"
                image={SiriImage}
                description="Siri was developed by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
