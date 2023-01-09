import Card from "./_card"

const _cardContainer = () => {
  return (
    <div className="cardContainer">
        <Card 
            img="/src/images/image-colton.jpg"
            name="Colton Smith"
            mainText='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
        />
        <Card 
            img="/src/images/image-irene.jpg"
            name="Irene Roberts"
            mainText='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
        />
        <Card 
            img="/src/images/image-anne.jpg"
            name="Anne Wallace"
            mainText='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
        />
    </div>
  )
}

export default _cardContainer