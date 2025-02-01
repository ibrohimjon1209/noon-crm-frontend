import React from 'react'

const Button = () => {


    const [loading, setLoading] = useState(false);
    const [hovered, setHovered] = useState(false)

    const save_change = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log("O'zgarishlar saqlandi");
        }, 1000);
    };

    return (
        <div>
            <div className="relative">
                <button
                    onClick={save_change}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`fixed bottom-5 right-[390px]  overflow-hidden w-[142px] h-[63px] rounded-md bg-[rgba(13,153,255,1)] transition-all duration-200 active:scale-95 text-white text-lg border-none cursor-pointer z-50 ${loading ? 'opacity-50' : ''}`}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="animate-spin rounded-full border-4 border-t-transparent border-white w-8 h-8 mx-auto"></div>
                    ) : (
                        'Saqlash'
                    )}
                    <div className={`absolute top-[-40px] opacity-30 rotate-[30deg] shadow-2xl shadow-black transform transition-all duration-[0.3] ${!loading && hovered ? 'opacity-100 translate-x-40' : 'opacity-0 translate-x-[-100px]'}`}>
                        <div className="bg-white w-[40px]  h-[150px] "></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Button