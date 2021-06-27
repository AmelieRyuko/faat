import React from 'react'

class Citations extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '', loading: false }
      }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://citations.ouest-france.fr/apis/export.php?lite=1&t=theme&theme=amour', { method: 'POST' })
            .then((response) => response.text())
            .then((text) => this.setState({ text, loading: false }));
    }

    render() {
        if (this.state.loading) {
            return (
              <p>Chargement en cours...</p>
            )
          }

        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
                <style jsx>{`
             div{
                border-radius:5px;
                border:3px solid beige;
                padding:3px;
                 };
             `}</style>
                
            </div>
        );
    }
}

export default Citations
