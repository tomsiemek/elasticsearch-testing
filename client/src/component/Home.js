import React from 'react';
import {Header, Icon, Input, Button} from 'semantic-ui-react';

 import {Link} from 'react-router-dom';
 import Links from '../links';
//const homePageImageUrl = "https://picsum.photos/3670/2462?image=20";

const Home = (props) => {

      let centerStyle = {
            position: 'absolute',
            left: 0,
            top: '30%',
            width: '100%',
            textAlign: 'center',
            fontSize: 18
      }
    return (
        
        <div>
            {//<img src={homePageImageUrl} style={styles} />}
            }
            <div style={centerStyle}>
                <Header as='h3' icon color='blue' size='huge'>
                    <Icon name='shop' color='blue'/>
                    
                    <Header as='h2' color='blue' size='huge'>Welcome to our shop!</Header>
                    Get all the stuff you need.
                </Header>
                <br/>

                {//<Input size='massive' icon='search' placeholder='Search...' />
                }
                <Button size='massive' as={Link} to={Links.phonesPath} >Phones</Button>
                <Button size='massive' as={Link} to={Links.tvsPath} >Tvs</Button>
                <Button size='massive' as={Link} to={Links.watchesPath} >Watches</Button>
                
            </div>
        </div>
    )
}

export default Home;