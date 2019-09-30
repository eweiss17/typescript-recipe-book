import React from 'react';
import './index.css';
import {Button, Container, Divider, Header, Icon, Message, Tab, Form} from 'semantic-ui-react';
import RecipeBox from './RecipeBox';
import DisplayRecipes from './DisplayRecipes';

interface State {
  recipes: Array<Array<string>>;
  title: string;
  recipeCount: number;
}

interface Props {

}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipes: [],
      title: '',
      recipeCount: 0,
    };
  }
  
  incrementRecipe = () => {
    this.setState({recipeCount: this.state.recipeCount + 1})
  }
  
  addRecipe = (recipe: Array<string>) => {

    let arr = this.state.recipes;
    arr.push(recipe);
    this.setState({recipes: arr})
    this.incrementRecipe();
    
  }
  
  render() {
    return (
      <div>
        <Container className='header-container' textAlign='center'>
          <Header as='h1'>React Recipebook</Header>
          <Header as='h3'>Now with TypeScript!</Header>
           {/* {(this.state.recipeCount) ? <div>You have {this.state.recipeCount - 1} recipes!</div> : null} */}
        </Container>
        <Divider />
        <Container className='recipe-container'>
        {(this.state.recipes && this.state.recipes.length) ? 
            <DisplayRecipes recipes={this.state.recipes} />
            : null }
        {(this.state.recipeCount) ? 
            <RecipeBox addRecipe={(recipe: Array<string>) => {this.addRecipe(recipe)}} />
            : <Button className ='new-button' onClick={this.incrementRecipe} primary>Start!</Button>}
        </Container>
      </div>
    );
  }
}
