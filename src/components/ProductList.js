import React from 'react';
const ProductList=(props)=>{
    const myProducts=props.productList.map((data)=>
    {
        return(
            <div key={data.id}>
                <h2>{data.productName}</h2>
                <div>
                    {data.detail}
                </div>
            </div>
        )
    })
 return(
     <React.Fragment>
      <div>ProductList</div>
      <div>{myProducts}</div>

     </React.Fragment>    
 )
}
export default ProductList;