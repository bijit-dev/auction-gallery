
import { useEffect, useState } from "react";
import Item from "./Item";
import { FaRegHeart } from "react-icons/fa";
import FavoriteItem from "../FavoriteItems/FavoriteItem";
import { Bounce, ToastContainer } from "react-toastify";

const Auction = () => {
    // data call 
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItems(data)
            )
    }, [])

    const [data, setData] = useState([])
    function heandlebtn(item) {
        const newData = [...data, item]
        setData(newData);
    }

    const removeFavoriteItem = (id) => {
        const newFavoriteItem = data.filter(mark => mark.id !== id)
        setData(newFavoriteItem)
    }

    const [totalBid, setTotalBid] = useState(0)

    const heandelBitPlas = (bid) => {
        setTotalBid(totalBid + bid);
    }
    const heandelBitMins = (bid) => {
        setTotalBid(totalBid - bid);
    }
    console.log(data);
    console.log(items);
    

    return (
        <div className="pt-[132px] pb-[116px] bg-[#EBF0F5]">
            <div className=" container mx-auto px-5 pb-8">
                <h1 className="Sora font-medium text-[32px] text-[#0E2954] pb-5 ">Active Auctions</h1>
                <p className="Sora font-normal text-xl text-black opacity-80">Discover and bid on extraordinary items</p>
            </div>

            <div className="container mx-auto px-5">
                <div className="flex gap-6 ">

                    {/* left container  */}
                    <div className=" w-8/12 h-full rounded-3xl overflow-x-auto p-8 border-base-content/5 bg-white">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='Sora text-xl text-black'>Items</th>
                                    <th></th>
                                    <th className='Sora text-xl text-black'>Current Bid</th>
                                    <th className='Sora text-xl text-[#0E2954]'>Time Left</th>
                                    <th className='Sora text-xl text-black'>Bid Now</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    items.map(item => <Item key={item.id} item={item} heandlebtn={heandlebtn} heandelBitPlas={heandelBitPlas} show={!!data.find((d)=> d.id == item.id)} />)
                                }
                            </tbody>
                        </table>

                    </div>

                    {/* right container  */}
                    <div className="w-4/12 h-full rounded-3xl  p-8 bg-white">
                        <div className="flex justify-center items-center gap-3 border-b border-neutral-400/30 pb-4 text-3xl ">
                            <FaRegHeart />
                            <h1 className="text-[#0E2954] Sora font-medium text-3xl ">Favorite Items</h1>
                        </div>
                        <div >

                            <div className={data.length === 0 ? "block" : "hidden"}>
                                <div className="py-12 flex flex-col text-center  justify-center space-y-6">
                                    <h2 className="Sora font-medium text-[26px] text-black">No favorites yet</h2>
                                    <p className="Sora font-medium text-lg text-black opacity-70 w-72 mx-auto">Click the heart icon on any item to add it to your favorites</p>
                                </div>
                            </div>

                            {/* fav items */}
                            {
                                data.map(item => <FavoriteItem key={item.id} item={item} removeFavoriteItem={removeFavoriteItem} heandelBitMins={heandelBitMins} />)
                            }
                            
                            <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Bounce} />


                        </div>
                        <div className="flex justify-between border-t border-neutral-400/30 pt-8 Sora font-medium text-[26px]">
                            <h3>Total bids Amount</h3>
                            <span>${totalBid}</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Auction;