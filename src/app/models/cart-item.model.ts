export class CartItem {
    constructor(
        public product: string,
        public productTitle: string,
        public quantity: number,
        public price: number,
        public image: string
    ) { }
}