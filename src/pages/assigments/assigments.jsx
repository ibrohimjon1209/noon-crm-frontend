import React, { useState, useEffect } from "react";
import axios from "axios";
import red_phone_icon from "./images/red_phone_icon.png";
import green_phone_icon from "./images/green_phone_icon.png";
import Add_modal from "./add_modal";
import Header from "./header";
import './style.css';

const Assignments = () => {
  const [is_filter_open, set_is_filter_open] = useState(false);
  const [is_add_modal_open, set_is_add_modal_open] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.get("https://backend.noonedu.uz/dashboard/assignments/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data && response.data.data) {
        setAssignments(response.data.data);
      } else {
        throw new Error("Invalid data format received from API");
      }
    } catch (err) {
      console.error("Error fetching assignments:", err);
      setError(err.message || "Failed to load assignments data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddModalClose = () => set_is_add_modal_open(false);

  // Helper function to categorize assignments
  const categorizeAssignments = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    const result = {
      gone: [], // Past assignments
      everyday: [], // Today's assignments
      monthly: [], // This month's assignments
      feature: [] // Future assignments
    };

    assignments.forEach(assignment => {
      const assignmentDate = new Date(assignment.date);
      assignmentDate.setHours(0, 0, 0, 0);
      
      // Get student or moderator name
      let name = "Unknown";
      let phone = "N/A";
      
      if (assignment.student) {
        // In a real app, you would fetch student details
        name = `Student #${assignment.student}`;
        phone = "+998 XX XXX XX XX";
      } else if (assignment.moderator) {
        // In a real app, you would fetch moderator details
        name = `Moderator #${assignment.moderator}`;
        phone = "+998 XX XXX XX XX";
      } else if (assignment.lead) {
        // In a real app, you would fetch lead details
        name = `Lead #${assignment.lead}`;
        phone = "+998 XX XXX XX XX";
      }
      
      // Format the assignment for display
      const formattedAssignment = {
        id: assignment.id,
        name: name,
        phone: phone,
        date: formatDate(assignment.date),
        time: formatTime(assignment.time),
        description: assignment.comment || "No comment",
        completion: assignment.completion
      };
      
      // Categorize based on date
      if (assignmentDate < today) {
        // Past assignments
        result.gone.push({...formattedAssignment, status: 'gone'});
      } else if (assignmentDate.getTime() === today.getTime()) {
        // Today's assignments
        result.everyday.push({...formattedAssignment, status: 'everyday'});
      } else if (assignmentDate < nextMonth) {
        // This month's assignments
        result.monthly.push({...formattedAssignment, status: 'monthly'});
      } else {
        // Future assignments
        result.feature.push({...formattedAssignment, status: 'feature'});
      }
    });
    
    return result;
  };

  // Format date to DD.MM.YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  };

  // Format time to HH:MM
  const formatTime = (timeString) => {
    if (!timeString) return "00:00";
    return timeString.substring(0, 5);
  };

  // Count assignments by category
  const countAssignments = (category) => {
    const categorized = categorizeAssignments();
    return categorized[category].length;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading assignments data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg font-medium">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => fetchAssignments()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const categorizedAssignments = categorizeAssignments();

  return (
    <>
      <div className={`w-full ${is_filter_open ? 'h-[119vh]' : `h-[119vh]`} overflow-x-hidden flex flex-col items-center mt-[15px]`}>
        <Header is_filter_open={is_filter_open} set_is_filter_open={set_is_filter_open} set_is_add_modal_open={set_is_add_modal_open}/>
        <div className="w-full overflow-hidden h-[123vh] flex flex-col ml-[32px] mt-[20px] gap-[25px]">

          <div className="w-full overflow-x-auto h-full flex flex-row pr-[30px] gap-[15px]">

            {/* O'tib ketgan (Past) */}
            <div className="w-full h-full border-t-4 border-[#FE3D3D] flex flex-col items-center pt-6 gap-3">
              <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">O'tib ketgan</p>
              <p className="font-roboto font-semibold text-lg leading-6 text-[#FE3D3D]">{countAssignments('gone')}</p>
              <div className="w-full h-auto bg-transparent flex flex-col gap-4 overflow-y-scroll">
                {categorizedAssignments.gone.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[200px] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                  >
                    <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                      {item.name}
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        src={red_phone_icon || "/placeholder.svg"}
                        alt="phone"
                        className="w-5 h-5 object-contain"
                      />
                      <p className="text-[#FE3D3D] text-sm leading-5 font-roboto font-medium">
                        {item.phone}
                      </p>
                    </div>
                    <p className="text-[#FE3D3D] text-xs leading-4 font-roboto font-medium">
                      {item.date} | {item.time}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-black text-xs leading-4 font-roboto font-medium">
                        Izoh :
                      </p>
                      <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                    {item.completion && (
                      <div className="mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Bajarilgan
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bugun (Today) */}
            <div className="w-full h-full border-t-[3px] border-[#3DFE5D] flex flex-col items-center pt-[25px] gap-3">
              <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Bugun</p>
              <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#3DFE5D]">{countAssignments('everyday')}</p>
              <div className="w-full h-full bg-transparent flex flex-col gap-4 overflow-y-scroll">
                {categorizedAssignments.everyday.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                  >
                    <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                      {item.name}
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        src={green_phone_icon || "/placeholder.svg"}
                        alt="phone"
                        className="w-5 h-5 object-contain"
                      />
                      <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                        {item.phone}
                      </p>
                    </div>
                    <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                      {item.date} | {item.time}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-black text-xs leading-4 font-roboto font-medium">
                        Izoh :
                      </p>
                      <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                    {item.completion && (
                      <div className="mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Bajarilgan
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Oylik (Monthly) */}
            <div className="w-full h-full border-t-[3px] border-[#A1A1A1] flex flex-col items-center pt-[25px] gap-3">
              <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Oylik</p>
              <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#A1A1A1]">{countAssignments('monthly')}</p>
              <div className="w-full h-full bg-transparent flex flex-col gap-4 overflow-y-scroll">
                {categorizedAssignments.monthly.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                  >
                    <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                      {item.name}
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        src={green_phone_icon || "/placeholder.svg"}
                        alt="phone"
                        className="w-5 h-5 object-contain"
                      />
                      <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                        {item.phone}
                      </p>
                    </div>
                    <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                      {item.date} | {item.time}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-black text-xs leading-4 font-roboto font-medium">
                        Izoh :
                      </p>
                      <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                    {item.completion && (
                      <div className="mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Bajarilgan
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Kelajak (Future) */}
            <div className="w-full h-full border-t-[3px] border-[#A1A1A1] flex flex-col items-center pt-[25px] gap-3">
              <p className="uppercase text-black font-roboto font-semibold text-lg leading-6">Kelajak</p>
              <p className="text-black font-roboto font-semibold text-lg leading-6 text-[#A1A1A1]">{countAssignments('feature')}</p>
              <div className="w-full h-full bg-transparent flex flex-col gap-4 overflow-y-scroll">
                {categorizedAssignments.feature.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[auto] bg-white rounded-lg flex flex-col pt-3 pl-4 pb-3 gap-3"
                  >
                    <p className="text-[#0D99FF] text-lg leading-6 font-roboto font-medium">
                      {item.name}
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                      <img
                        src={green_phone_icon || "/placeholder.svg"}
                        alt="phone"
                        className="w-5 h-5 object-contain"
                      />
                      <p className="text-[#3EC483] text-sm leading-5 font-roboto font-medium">
                        {item.phone}
                      </p>
                    </div>
                    <p className="text-[#3EC483] text-xs leading-4 font-roboto font-medium">
                      {item.date} | {item.time}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-black text-xs leading-4 font-roboto font-medium">
                        Izoh :
                      </p>
                      <p className="text-black text-xs leading-4 font-roboto font-medium max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                    {item.completion && (
                      <div className="mt-auto">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Bajarilgan
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Add_modal isOpen={is_add_modal_open} onClose={handleAddModalClose} onSuccess={fetchAssignments} />
      </div>
    </>
  );
};

export default Assignments;
