export type CartProps = {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface CartItem {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}
