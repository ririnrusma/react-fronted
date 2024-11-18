import {useState, useEffect} from 'react'
import getAllProducts from '../../services/getAllProducts'
import CardList from '../../components/CardList/CardList'
import Navbar from '../../components/Navbar/Navbar'
import RadioButton from '../../components/RadioButton/RadioButton'

export default function ProductPage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    let allProducts = getAllProducts()
    allProducts = allProducts.length > 0 ? allProducts : []
    // allProducts = []
    setProducts(allProducts)
  }, [])

  const RadioButtonOpts = [
    
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Sweet',
      value: 'sweet',
    },
    {
      label: 'Spicy',
      value: 'spicy',
    },
    {
      label: 'Drink',
      value: 'drink',
    },    
  ]

  return (
    <>
      <Navbar></Navbar>
      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
          <h3 className='font-medium'>Filter</h3>
          <div className='flex gap-2 flex-wrap'>
             <RadioButton options={RadioButtonOpts} defaultValue={'all'}/>
          </div>
      </div>
     <section className='flex justify-center items-center min-h-screen px-24 py-4'>
      <main className='grid grid-cols-4 gap-4'>
          <CardList products={products}/>
      </main>

    </section>
    </>
   
  )
}
