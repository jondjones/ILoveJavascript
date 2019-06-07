# JSON Form Example

JSON form allows you to create a web form in a react app.  When you use JSON form you do not need to write much code yourself, as it allows you to build your form through a JSON schema.  Lets say you have the JSON schema defined as below

```javascript
const mySchema ={
  "title": "My Form",
  "description": "My Form",
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    }
  }
};
```

You could then use this code to render a form

```javascript
import React, { Component } from 'react';
import Form from 'react-jsonschema-form'

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        console.log(formData);
    }

    render() {
        return (
            <Form schema={mySchema} onSubmit={this.handleSubmit} />
        )
    }
}
```