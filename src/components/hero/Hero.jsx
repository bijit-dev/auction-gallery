

const Hero = () => {
    return (
        <div className="banner min-h-screen flex items-center">
            <div className="container mx-auto px-5 space-y-5">
                <h1 className="Sora max-w-[630px] text-5xl font-semibold text-white">Bid on Unique Items from Around the World</h1>
                <p className="Sora max-w-[610px] font-light text-2xl text-white opacity-80">
                    Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                </p>
                <button className="bg-white Sora font-medium text-xl rounded-[35px] px-8 py-4">Explore Auctions</button>
            </div>
        </div>
    );
};

export default Hero;