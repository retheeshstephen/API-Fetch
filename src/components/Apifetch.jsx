import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Apifetch() {

    const [products,setProduct]=useState([])

    const base_url='https://dummyjson.com/products'

    const fetchData=async()=>{
        const result=await fetch(base_url)
        .then (result=>result.json())
        .then(products=>setProduct(products.products))
    }
console.log(products);
  
useEffect(()=>{
fetchData()
},[])

return(
    <div className='card'>
        {
        products.map(item=>(
        <Card  style={{ width: '18rem' }}>
        <Card.Img className='img' variant="top" src={item.thumbnail} />
        <Card.Body className='bdy'>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>))

            
        }

        
    </div>
)
}
export default Apifetch


