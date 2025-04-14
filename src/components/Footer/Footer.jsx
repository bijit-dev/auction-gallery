import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="flex flex-col items-center py-32">
            <div><img src={Logo} alt="logo" /></div>
            <ul className="flex justify-center gap-5 Sora pt-3 pb-5">
                <li className="text-[22px] text-black">Bid.</li>
                <li className="text-[22px] text-black">Win.</li>
                <li className="text-[22px] text-black">Own.</li>
            </ul>
            <ul className="flex md:gap-5 lg:gap-10 Poppins font-normal">
                <li className="text-lg ">Home</li>
                <li className="text-lg ">Auctions</li>
                <li className="text-lg ">Categories</li>
                <li className="text-lg ">How to works</li>
            </ul>
            <p className="pt-8 Sora font-normal text-lg text-black"> &#169; {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;