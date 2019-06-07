# Higher Order Components

HOC names usually start with the term with as it adds on extra information

```javascript
import React from 'react';

const withValidation = (WrappedComponent, validations) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          validations={validations}
        />
      );
    } 
  }
    
  return HOC;
}; 

export default withValidation;
```

```javascript
import React from 'react';
import withValidation from './with-validation';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secret} {props.secret}.
  </div>
);

const WrappedComponent = withValidation(DisplayTheSecret, 'this');
export default WrappedComponent;
```