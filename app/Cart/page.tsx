import { Button } from "@/components/ui/button";
import { BreadcrumbDemo } from "@/components/ui/myBreadCrumb";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface ICart {
  id: number;
  imageURL: string;
  title: string;
  size: string;
  color: string;
  price: string;
}

const cartItem: ICart[] = [
  {
    id: 1,
    imageURL: "/product-detail/alsolike2.png",
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$145",
  },
  {
    id: 2,
    imageURL: "/products/product3.png",
    title: "Gradient Graphic T-shirt",
    size: "Small",
    color: "Black",
    price: "$120",
  },
  {
    id: 3,
    imageURL: "/products/product2.png",
    title: "Gradient Graphic T-shirt",
    size: "Medium",
    color: "Blue",
    price: "$99",
  },
  {
    id: 4,
    imageURL: "/product-detail/alsolike1.png",
    title: "Gradient Graphic T-shirt",
    size: "Extra Large",
    color: "Black",
    price: "$180",
  },
];

export default function Cart() {

  return (
    <>
    <div className="pl-0 md:pl-3 mt-[-10px]">
    <BreadcrumbDemo></BreadcrumbDemo>
    </div>
    <h1 className="text-[32px] md:text-[40px] font-extrabold pl-3 md:pl-12 mt-2 md:mt-7 mb-4">YOUR CART</h1>
    <main className="flex gap-5 md:gap-3 justify-center flex-col md:flex-row px-3 md:px-0 pb-10 md:pb-0  ">
      {/* Left */}
      <div className="w-full h-full md:w-[730px] space-y-5 p-3 md:p-5 rounded-[20px] border">
        {cartItem.map((item) => {
          return (
            <div key={item.id} className="flex justify-between pb-5 border-b">
              <div className="flex gap-3">
                <Image
                  src={item.imageURL}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] rounded-[10px]"
                ></Image>
                <div>
                  <h3 className="text-[16px] md:text-[20px] font-bold">{item.title}</h3>
                  <p className="text-[12px] md:text-[14px]">Size: <span className="text-black/60">{item.size}</span></p>
                  <p className="text-[12px] md:text-[14px]">Color: <span className="text-black/60">{item.color}</span></p>
                  <p className="text-[20px] md:text-[24px] font-bold">{item.price}</p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <FontAwesomeIcon icon={faTrashCan} className="text-[18px] md:text-[20px] text-[#FF3333] hover:cursor-pointer" />

                <div className="flex justify-between items-center w-[100px] md:w-[130px] px-[20px] py-[12px] rounded-[62px] bg-[#F0F0F0] text-black text-[14px] font-bold">
                  <FontAwesomeIcon icon={faPlus} className="text-[14px] md:text-[18px] hover:cursor-pointer" />
                  1
                  <FontAwesomeIcon icon={faMinus} className="text-[14px] md:text-[18px] hover:cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* right */}
      <div className="w-full h-full md:w-[510px] flex flex-col p-5 pb-8 rounded-[20px] border">
        <div className="space-y-5">
        <h2 className="text-[20px] md:text-[24px] font-bold">Order Summary</h2>
        <p className="flex justify-between text-[16px] md:text-[20px] text-black/60">Subtotal <span className="text-black font-bold">$565</span></p>
        <p className="flex justify-between text-[16px] md:text-[20px] text-black/60">Discount (-20%)<span className="text-[#FF3333] font-bold">-$131</span></p>
        <p className="flex justify-between text-[16px] md:text-[20px] text-black/60 pb-4 border-b">Delievery Fee <span className="text-black font-bold">$15</span></p>
        <p className="flex justify-between text-[16px] md:text-[20px] text-black mt-2">Total <span className="text-[20px] md:text-[24px] font-bold">$467</span></p>

        <div className="flex">
            <input type="text" placeholder="Add promo code" className="bg-[#F0F0F0] px-[16px] py-[12px] rounded-[62px] text-[14px] w-full"/>
            <Button className="w-[120px] px-[16px] py-[22px] rounded-[62px] ml-2">Apply</Button>
        </div>
        <Button className="px-[54px] py-[26px] w-full rounded-[62px]">Go to Checkout</Button>
        </div>
      </div>
    </main>
    </>
  );
}
