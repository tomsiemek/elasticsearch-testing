import React, { Component } from 'react'
import {Button, Flag} from 'semantic-ui-react';
import cookie from 'react-cookies'
import labels from '../labels';
export default class Language extends Component {
  
    constructor() {
        super();

        let language = cookie.load('language');
        console.log(language);
        if (language !== 'polish') {
            this.state = {
                language: language,
                flagCode: 'gb'
            }
        }

        else {
            this.state = {
                language: language,
                flagCode: 'pl'
            }
        }
    }
  changeLanguage = () => {
      if(this.state.language === 'english') {
          this.setState({
              language: 'polish',
              flagCode: "pl"
            });
        cookie.save('language', 'polish');
      }

      else {
        this.setState({
            language: 'english',
            flagCode: 'gb'
        });
        cookie.save('language', 'english');
      }
      window.location.reload();

  }
    render() {
    return (
        <Button color='white' onClick={this.changeLanguage}>
        <Flag size='huge'  name={this.state.flagCode}/>
        
        </Button>
    )
  }
}
