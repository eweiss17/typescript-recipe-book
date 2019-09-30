import React from 'react';
import './App.css';
import {Button, Container, Divider, Header, Icon, Message, Tab, Form} from 'semantic-ui-react';

interface RecipeState {

}

interface RecipeProps {
    recipes: Array<Array<string>>;
}

export default class DisplayRecipes extends React.Component<RecipeProps, RecipeState> {
    constructor(props: RecipeProps) {
        super(props);
        this.state = {
    
        };
    }   

    renderRecipes = () => {
        return  this.props.recipes.map((recipe, index) => 
            <div key={index}>
                <p>{recipe[0]}</p>
                <p>{recipe[1]}</p>
            </div>
        )
    }

    render() {
        return (
            <Container>
                {this.renderRecipes()}
            </Container>
        );
    }
}