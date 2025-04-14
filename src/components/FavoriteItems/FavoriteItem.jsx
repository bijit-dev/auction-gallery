import { IoMdClose } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

const FavoriteItem = ({ item, removeFavoriteItem, heandelBitMins}) => {
    const notify = () => toast(`Remove  Favorite item ${item.title}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    return (
        <div>
            <div className="flex gap-6 items-center mt-5 border-rose-950 border-2 rounded-lg p-4">
                <div className="w-20"><img className="w-full h-full" src={item.image} alt="" /></div>
                <div className="">
                    <h3 className="w-72 Sora font-normal text-base text-[#0E2954]">{item.title}</h3>
                    <div className=" flex gap-5 Sora font-normal text-base text-[#0E2954]">
                        <h3>${item.currentBidPrice}</h3>
                        <h3>Bids:{item.bidsCount}</h3>
                    </div>
                </div>
                <IoMdClose onClick={() => { removeFavoriteItem(item.id); heandelBitMins(item.currentBidPrice); notify()}} className="w-8 h-8 hover:text-red-500 cursor-pointer" />
            </div>
        </div>
    );
};

export default FavoriteItem;