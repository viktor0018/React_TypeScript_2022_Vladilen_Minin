
import React, {  useContext } from 'react';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import {Product} from '../components/Product'
import {Modal} from '../components/Modal'
import {CreateProduct} from '../components/CreateProduct'

import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


function ProductsPage() {

  const {products, loading,error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (products:IProduct) => {
    close()
    addProduct(products)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map(product => <Product key={product.id} product={product}/>)}
      {modal && <Modal title='Create new model' onClose={()=>close()}> 
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      <button 
      className="fixed bottom-5 right-5 rounded-full bg-red-500 text-white text-2xl px-4 py-2"
      onClick={()=>open()}
      > +</button>
    </div>
  );
}

export default ProductsPage;