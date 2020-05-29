import React from 'react';

const asyncComponent = (importedComponent: () => Promise<any>) => {
  return class extends React.Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importedComponent()
        .then(comp => this.setState({ component: comp.default }))
        .catch(err => console.log(err));
    }

    render() {
      const Comp: any = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
