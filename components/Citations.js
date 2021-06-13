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
                
            </div>
        );
    }
}

export default Citations