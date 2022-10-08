export default class ProductCard {
	elem = null;
	product = null;


	constructor(product) {
		this.product = product;
		this.elem = this.render();
	}
	
  render() {
	const elem = this.createElement(this.template());
	const button = elem.querySelector('.card__button');	
	button.addEventListener('click', () => {
		
		const event = new CustomEvent('product-add', {detail: this.product.id, 
		bubbles: true, 
		});
		elem.dispatchEvent(event);
			
	});	
	
	return elem;
  }

  

  createElement(html) {
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = html;
	
	return tempDiv.firstElementChild;
  }

	template(){
		return `
		<div class="card">
	<div class="card__top">
			<img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
			<span class="card__price">€${this.product.price.toFixed(2)}</span>
	</div>
	<div class="card__body">
			<div class="card__title">${this.product.name}</div>
			<button type="button" class="card__button">
				<img src="/assets/images/icons/plus-icon.svg" alt="icon">
			</button>
	</div>
	</div>
	`
	}


}


const  product = {
	name: "Laab kai chicken salad", // название товара
    price: 10, // цена товара
    category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
    image: "laab_kai_chicken_salad.png", // название картинки товара
    id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
};

const productCard = new ProductCard(product);
console.log(productCard.elem);

