import React from 'react';
import {Header, Icon, Button} from 'semantic-ui-react';

 import {Link} from 'react-router-dom';
 import Links from '../links';
 import labels from '../labels';

const Home = () => {

      let centerStyle = {
            position: 'absolute',
            left: 0,
            top: '30%',
            width: '100%',
            textAlign: 'center',
            fontSize: 18
      }

      console.log(labels.welcome);
    return (
        
        <div>
            <div style={centerStyle}>
                <Header as='h3' icon color='blue' size='huge'>
                    <Icon name='shop' color='blue'/>
                    
                    <Header as='h2' color='blue' size='huge'>{labels.welcome}</Header>
                    {labels.homeSubtitle}
                </Header>
                <br/>
                <Button size='massive' as={Link} to={Links.phonesPath} >{labels.phones}</Button>
                <Button size='massive' as={Link} to={Links.tvsPath} >{labels.tvs}</Button>
                <Button size='massive' as={Link} to={Links.watchesPath} >{labels.watches}</Button>
                
            </div>
        </div>
    )
}

export default Home;