import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean
}

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice} = useCart()

  const currentYear: number = new Date().getFullYear()

  const pageContent = viewCart
    ? <p>Shopping Cart &copy; {currentYear}</p>
    : (
      <>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Shopping Cart &copy; {currentYear}</p>
      </>
    )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )

  return content
}

export default Footer