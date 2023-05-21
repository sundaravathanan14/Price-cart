import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function App() {
  const cloths=[
    {
      'name' : 'Denim & Cotton',
      'image':  'https://m.media-amazon.com/images/I/71r4xpnSNeL._UY679_.jpg',
      'price' : '₹799',
       'mrp' :  '₹1,699',
       'rating': [true,true,true,true,false],
      },
      {
        'name' : 'SOUTH SAILOR',
        'image':  'https://m.media-amazon.com/images/I/71sMdQttSkL._UY679_.jpg',
        'price' : '₹499',
         'mrp' :  '₹1,499',
         'rating': [true,true,true,false,false],
        },
        {
          'name' : 'Frocks Dress',
          'image':  'https://m.media-amazon.com/images/I/81wEWJg1R8L._UX679_.jpg',
          'price' : '₹675',
           'mrp' :  '₹1,999',
           'rating': [true,true,false,false,false],
          },
          {
            'name' : 'GREEN CAT FROCK',
            'image':  'https://m.media-amazon.com/images/I/41dYa8Kxx2L.jpg',
            'price' : '₹599',
             'mrp' :  '₹999',
             'rating': [true,true,true,true,true],
            },
            {
              'name' : 'Trim Belted Dress',
              'image':  'https://m.media-amazon.com/images/I/81jJKk1miWL._UL1500_.jpg',
              'price' : '₹499',
               'mrp' :  '₹899',
               'rating': [true,true,true,true,true],
              },
              {
                'name' : 'TAGAS Baby-Girls Dress',
                'image':  'https://m.media-amazon.com/images/I/81-7CI18PJL._UX679_.jpg',
                'price' : '₹599',
                 'mrp' :  '₹1299',
                 'rating': [true,true,true,true,true],
                }

  ]
  return (
    <div className="App">
      <Container>
            <Row>
            {cloths.map((clothData,i)=>(
            <Col key={i}> 
            <PriceCard key={i} clothData={clothData}  /> </Col>)

)}
        
        
      </Row>
    </Container>

      
      
    </div>
  );
}


export default App;

//card componnent creation 

function PriceCard({clothData}){
  const [showButton,changeButton]=useState(true);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clothData.image} />
      <Card.Body>
        <Card.Title>{clothData.name}</Card.Title>
        <div className="star-rating">
      {clothData.rating.map((star,i) => {        
        return (         
          <span className={star ? 'star':'disable-star'} key={i}>&#9733;</span>        
        );
      })}
    </div>
        <Card.Text className='price'> {clothData.price} <span className='mrp'>{clothData.mrp}</span>        
        </Card.Text>
        {showButton ?
        <Button variant="primary" onClick={()=>{
          changeButton(false)
        }}>Add to cart</Button> :
        <Button variant="danger" onClick={()=>{
          changeButton(true)
        }}>Remove from cart</Button>}
        
        
      </Card.Body>
    </Card>
  )
}
