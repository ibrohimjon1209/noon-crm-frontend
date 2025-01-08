import React from 'react';

function Test() {
    const timeSlots = Array(20).fill("08:00 - 08:30");
    const zones = Array(8).fill(null).map((_, i) => `${i + 1}-xona`);

    return (
        <div className='ml-[40px] w-[95%] h-[600px] overflow-y-auto overflow-x-auto'>

            <div className="w-full h-full overflow-x-auto overflow-y-auto ml-[0px] border-[1px] border-[rgba(74,106,201,1)] rounded-r-[15px]">
                <table className="border-[1px] border-[rgba(203,204,205,1)] w-full min-w-[800px]">
                    <thead>
                        <tr>
                            <div className="flex w-[2105px] bg-white flex-col items-center justify-center">
                                <th className="relative left-[20px] text-[rgba(64,64,64,1)]">Xona</th>
                                <div className="w-20 h-[1px] rotate-[20deg] bg-black"></div>
                                <th className="relative left-[-20px] text-[rgba(64,64,64,1)]">Vaqt</th>
                            </div>
                            {zones.map((zone) => (
                                <th
                                    key={zone}
                                    className="border-[1px] w-[2150px] border-[rgba(203,204,205,1)] p-2 bg-white text-center text-black"
                                >
                                    <h1>{zone}</h1>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((time, i) => (
                            <tr key={i}>
                                <td className="w-[2000px] bg-white border-[1px] border-[rgba(203,204,205,1)] p-2">{time}</td>
                                {zones.map((_, j) => (
                                    <td key={j} className="border-[1px] bg-white border-[rgba(203,204,205,1)] p-2">
                                        {/* <div className="bg-blue-500 text-white p-2 rounded-md m-1">
                            <div className="my-1">Guruh : IT</div>
                            <div className="my-1">Ustozi : Falonchi</div>
                            <div className="my-1">O'quchilar soni : 35/40</div>
                        </div> */}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Test;
