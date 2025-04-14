// import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const Item = ({ item, heandelBitPlas, heandlebtn,show }) => {
    // const [show, setShow] = useState(true)

    // function heandlebtn2() {
    //     setShow(false);
    // }

    const notify = () => toast(`Add Favorite item ${item.title}`, {
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

    console.log(show)
    
    return (
        <tr className='border-t border-neutral-400/30'>
            <td className=' w-24 h-24'><img className=' w-full h-full' src={item.image} alt="" /></td>
            <td className='Sora text-lg text-[#0E2954]'>{item.title}</td>
            <td className='Sora font-medium text-lg text-[#0E2954]'>${item.currentBidPrice}</td>
            <td className='Sora text-lg text-[#0E2954]'>{item.timeLeft}</td>
            <td className='flex justify-center  pt-9'>
                {!show ?
                    <FaRegHeart onClick={() => { heandlebtn(item); heandelBitPlas(item.currentBidPrice); notify()}} className='h-7 w-7 text-[#0E2954] cursor-pointer' />
                    : <FaHeart disabled className='h-7 w-7 text-red-500 cursor-not-allowed' />}
            </td>
            
        </tr>
    );
};

export default Item;