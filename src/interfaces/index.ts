export interface CartProps {
  open: boolean;
}

export interface DividerProps {
  color?: string;
  margin?: string;
}

export interface ImgComponentProps {
  link: string;
  altText: string;
  banner?: boolean;
}

export interface ModalProps {
  btnText?: string;
  open?: boolean;
  onClose: () => void;
}

export interface PolicyTextProps {
  subhead: string;
  children: string;
}

export interface TextBlockProps {
  children: string | JSX.Element;
  header?: string;
  element?: string;
}

export interface CartProviderInterface {
  children: JSX.Element;
}

export interface CartInterface {
  bottles: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
  boxes: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
}

export interface PricesInterface {
  bottles: {
    price: {
      gb: {
        [name: string]: number;
      };
    };
  };
  boxes: {
    price: {
      gb: {
        [name: string]: number;
      };
    };
  };
}

export interface InitialStateInterface {
  cart: CartInterface;
  totalItems: number;
  totalCartSum: number;
  removeItem: (product: string) => void;
  updateOrder: (newQuantity: number, product: string) => void;
  resetOrder: () => void;
  calcTotalSumPerProduct: (product: string) => void;
  updateCapacity: (capacity: string | undefined) => void;
  increaseBottle: () => void;
  increaseBox: () => void;
  decreaseBottle: () => void;
  decreaseBox: () => void;
  changeLang: (e: React.MouseEvent<HTMLElement>) => void;
  lang: string | null;
  cartVisible: boolean;
  openCart: () => void;
  changePrice: (price: string) => void;
}

export interface FooterFeedback {
  email: string;
  message: string;
}

export interface ItemInOrderInterface {
  id: string;
  title: {
    en: string;
    pl: string;
  };
  type: string;
  amount: number;
  price: {
    en: number;
    pl: number;
  };
  package: string;
  image: string;
  count: number;
}

export interface OrderInterface {
  cart: ItemInOrderInterface[];
  email: string;
}
