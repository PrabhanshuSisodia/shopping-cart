import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"

const Cart = () => {
  useTitle("Cart");

  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  ]

  return (
    <main>
      <section>
        <h1>Cart Item: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export  {Cart}
