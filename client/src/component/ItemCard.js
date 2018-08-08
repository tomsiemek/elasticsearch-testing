import React from 'react';
import {Card, LabelDetail} from 'semantic-ui-react';
import errorImage from '../images/sadFace.png';
import {Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Links from '../links';
import labels from '../labels';

const ItemCard = item => 
    <Card>
        <Image src={item.imageUrl || errorImage} onError={(e) => { e.target.src = errorImage }} />
        <Card.Content>

            <Card.Header><Link to={Links.productPath + '?id=' + item._id}>{item.name}</Link></Card.Header>
            <Card.Meta>
                <span className='date'>{item.producer}</span>
            </Card.Meta>
            <Card.Description> {item.price || "n/d"} {labels.currency}  <br /> {labels.amount}: {item.amount || "n/d"} </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='blue'>
                    {labels.buy}
          </Button>
            </div>
        </Card.Content>
    </Card>


export default ItemCard;