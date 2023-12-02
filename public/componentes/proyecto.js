class Proyecto extends React.Component {
    constructor(props) {
        super(props); 
            this.state= {
                mostrar: false
            } 

            this.cambiarMostrar = this.cambiarMostrar.bind(this);
        }

        cambiarMostrar() {
            var mostrarActual = this.state.mostrar;
            this.setState({
                mostrar: !mostrarActual
            })
        }
    render() {
        var clase = "";
        var texto= "";
        if (this.state.mostrar){
            clase = "d-block";
            texto = "Mostrar menos"
        }else{
            clase = " d-none";
            texto = "Mostrar mas"
        }
        return(
            <React.Fragment>
            
              <div className="card" style={{width: 15 + "rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{this.props.titulo}</h5>
                  <button className="btn btn-primary" onClick={this.cambiarMostrar}>{texto}</button>
                  <p className={clase}>{this.props.descripcion}</p>
                  <a href={this.props.link} target="_blank"  className={"btn btn-success " + this.props.boton + clase}>Proyecto</a>
                </div>
              </div> 
        
        </React.Fragment>
        );
    }
}

 ReactDOM.render(<Proyecto  titulo="Shopping List" descripcion="Proyecto básico de compras y recetas" link="https://lumetrio.com/proyectos/286" boton=""/>, document.getElementById("proyecto-Shopping"));

 ReactDOM.render(<Proyecto  titulo="Product preview card component" descripcion="Ejercicio de Front-End Mentor para practicar CSS" link="https://amdrew-idfc-patch-1--capable-rolypoly-a35041.netlify.app/"/>, document.getElementById("proyecto-Product"));

 ReactDOM.render(<Proyecto  titulo="QR code component" descripcion="Ejercicio de Front-End Mentor para practicar CSS" link="https://630557e14cc16e00616c9b6f--astonishing-figolla-f869a2.netlify.app/"/>, document.getElementById("proyecto-QRcode"));

 ReactDOM.render(<Proyecto  titulo="Interactive rating component" descripcion="Ejercicio de Front-End Mentor para practicar HTML, CSS y JacaScript" link="https://631113c1703ba04eef292b58--radiant-marigold-dd18d4.netlify.app/"/>, document.getElementById("proyecto-Interactive"));

 ReactDOM.render(<Proyecto  titulo="Order summary component"  descripcion="Ejercicio de Front-End Mentor para practicar CSS" link="https://silver-capybara-238682.netlify.app/"/>, document.getElementById("proyecto-Summary"));
//Proyecto - Final 

class CartaComponent extends React.Component{
    constructor(props) {
        super(props); 
            this.state= {
                modalTrue: true 
            } 

        }
    
    render() {
        return(
            <React.Fragment>
                <div className="card cardsMini" >
                    <div className="imagen-forma-mini">
                        <img src={"img/" + this.props.imagen}/>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.title}</h6>
                    </div>
                </div>
              
            </React.Fragment>
        );
    }

}

ReactDOM.render(<CartaComponent  title="Resolucion de problemas" imagen="resolucion.jpg"/>, document.getElementById("primera-carta"));

ReactDOM.render(<CartaComponent  title="Trabajo bajo presión" imagen="presion.jpg"/>, document.getElementById("segunda-carta"));

ReactDOM.render(<CartaComponent  title="Organizado" imagen="habilidades.jpg"/>, document.getElementById("tercer-carta"));

ReactDOM.render(<CartaComponent  title="Estratégico" imagen="estrategico.jpg"/>, document.getElementById("cuarta-carta"));

ReactDOM.render(<CartaComponent  title="Trabajo en equipo" imagen="equipo.jpg"/>, document.getElementById("quinta-carta"));

ReactDOM.render(<CartaComponent  title="Comunicativo" imagen="comunicacion.jpg"/>, document.getElementById("sexta-carta"));

ReactDOM.render(<CartaComponent  title="Adaptabilidad" imagen="adaptarse.jpg"/>, document.getElementById("septima-carta"));

ReactDOM.render(<CartaComponent  title="Autogestión" imagen="autogestion.jpg"/>, document.getElementById("octava-carta"));
//CArtacomponet final 

class CartaTecnica extends React.Component{
    constructor(props) {
        super(props); 
            
        }
    
    render() {
        return(
            <React.Fragment>
                <div className="card  cartaTecno p-2 m-4" >
                    <div className="card-body">
                        <h6 className="card-title">{this.props.title}</h6>
                    </div>
                    <p className="informacion">{this.props.informacion}</p>
                </div>
              
            </React.Fragment>
        );
    }

}

ReactDOM.render(<CartaTecnica  title="BOOTSTRAP" informacion="A lo largo del curso de programcion fullStack he estado aprendiendo esta herramienta útil para diseñar paginas web, de hecho la mayor parte de esta página se ha disenado con dicha herramienta. Por el momento continua mi recorrido para seguir aprendiendo mucho más."/>, document.getElementById("carta-1"));

ReactDOM.render(<CartaTecnica  title="REACT" informacion="Al igual que Bootstrap, React es una herramienta de la cual sigo aprendiendo, sin embargo; ahora hace parte de esta página ya que algunas secciones están compuestas por esta libreria."/>, document.getElementById("carta-2"));