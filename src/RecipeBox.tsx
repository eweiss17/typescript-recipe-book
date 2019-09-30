import React from 'react';
import './index.css';
import {Button, Container, Divider, Header, Icon, Message, Tab, Form} from 'semantic-ui-react';
import { string } from 'prop-types';

interface RecipeState {
  recipeTitle: string;
  recipeDescription: string;
}
  
interface RecipeProps {
  addRecipe(recipe: Array<string>): void;
}
  
export default class RecipeBox extends React.Component<RecipeProps, RecipeState> {
    constructor(props: RecipeProps) {
    super(props);
    this.state = {
      recipeTitle: '',
      recipeDescription: ''
    };
  }

  formContent = () => {
      return (
        <Container>
          <Form.Group widths='equal'>
              <Form.Input fluid label='Recipe Name' placeholder='Recipe Name' name='recipeTitle' onChange={this.handleChange}/>
              <Form.Input fluid label='Description' placeholder='Description' name='recipeDescription' onChange={this.handleChange}/>
          </Form.Group>
        </Container>
      )
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name } = e.target;
    this.setState({ [name]: value } as Pick<RecipeState, keyof RecipeState>);
  }
  
  generateForm = () => {
    // return this.formContent
  }

  submitForm = () => {
    this.props.addRecipe([this.state.recipeTitle, this.state.recipeDescription]);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitForm}>
          {this.formContent()}
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}