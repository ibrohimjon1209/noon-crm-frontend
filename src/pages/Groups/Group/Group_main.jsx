"use client"

import { useState, useEffect } from "react"
import Header from "./header"
import { Link } from "react-router-dom"
import axios from "axios"
import AddGroupModal from "./Course_addmodal/Add_modal"

const Group_main = () => {
  const [checkedRows, setCheckedRows] = useState({})
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        throw new Error("Authentication token not found")
      }

      const response = await axios.get("https://backend.noonedu.uz/dashboard/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.data && response.data.data) {
        setGroups(response.data.data)
      } else {
        throw new Error("Invalid data format received from API")
      }
    } catch (err) {
      console.error("Error fetching groups:", err)
      setError(err.message || "Failed to load groups data")
    } finally {
      setLoading(false)
    }
  }

  const handleAllChecked = (e) => {
    const isChecked = e.target.checked
    const newCheckedRows = {}
    groups.forEach((item) => {
      newCheckedRows[item.id] = isChecked
    })
    setCheckedRows(newCheckedRows)
  }

  const handleSingleCheck = (id) => {
    setCheckedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Helper function to format days of week
  const formatDaysOfWeek = (days) => {
    if (!days || !Array.isArray(days)) return "-"

    // Map day numbers to names
    const dayMap = {
      0: "Du",
      1: "Se",
      2: "Cho",
      3: "Pa",
      4: "Ju",
      5: "Sha",
      6: "Ya",
    }

    // Check if it's odd or even days pattern
    if (days.length === 3 && days.every((day) => Number.parseInt(day) % 2 === 0)) {
      return "Juft"
    } else if (days.length === 3 && days.every((day) => Number.parseInt(day) % 2 === 1)) {
      return "Toq"
    } else if (days.length === 7) {
      return "Har kuni"
    } else if (days.length === 2 && days.includes("0") && days.includes("2")) {
      return "Du-Cho"
    }

    // Otherwise return the day names
    return days.map((day) => dayMap[day] || day).join("-")
  }

  // Helper function to format time
  const formatTime = (startTime, endTime) => {
    if (!startTime || !endTime) return "-"

    // Format time to HH:MM
    const formatTimeString = (timeStr) => {
      const timeParts = timeStr.split(":")
      return `${timeParts[0]}:${timeParts[1]}`
    }

    return `${formatTimeString(startTime)}–${formatTimeString(endTime)}`
  }

  // Helper function to format date range
  const formatDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) return "-"

    // Format date to DD.MM.YYYY
    const formatDateString = (dateStr) => {
      const date = new Date(dateStr)
      return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`
    }

    return `${formatDateString(startDate)}–${formatDateString(endDate)}`
  }

  // Helper function to get status text
  const getStatusText = (status) => {
    const statusMap = {
      0: "Active",
      1: "Inactive",
      2: "Completed",
      3: "Cancelled",
    }
    return statusMap[status] || "Unknown"
  }

  // Handle successful group creation
  const handleGroupCreated = () => {
    fetchGroups() // Refresh the groups list
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading groups data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg font-medium">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => fetchGroups()}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />

      {/* Add Group Button */}
      <div className="flex justify-end w-[112vw] px-4 mt-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF] flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Yangi guruh qo'shish
        </button>
      </div>

      <div className="overflow-auto w-[112vw] h-[45vw] m-auto rounded-[10px] mt-[20px]">
        <table className="w-full h-auto border-none bg-white rounded-[10px] text-black">
          <thead>
            <tr>
              <th className="w-12 px-6 pt-[20px] pb-[25px] text-left">
                <div className="flex -mt-[8px] flex-row gap-[30px] pr-4 w-[100%]">
                  <label className="relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={
                        Object.keys(checkedRows).length === groups.length && Object.values(checkedRows).every(Boolean)
                      }
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                        ${
                          Object.keys(checkedRows).length === groups.length && Object.values(checkedRows).every(Boolean)
                            ? "bg-[#0EA5E9]"
                            : "bg-white"
                        } 
                        after:content-[''] after:absolute 
                        after:top-[2px] after:left-[5px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${
                          Object.keys(checkedRows).length === groups.length && Object.values(checkedRows).every(Boolean)
                            ? "after:block"
                            : "after:hidden"
                        }`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="w-12 px-6 pt-[20px] pb-[25px] text whitespace-nowrap-left">№</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">ID</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh nomi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Kurs</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Darajasi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Kun</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Dars vaqti</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh vaqti</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">O'quvchilar</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">O'qituvchi</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Xona</th>
              <th className="px-6 pt-[20px] pb-[25px] text-left whitespace-nowrap">Guruh holati</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((item, index) => (
              <tr className="hover:bg-blue-200" key={item.id}>
                <td className="px-6 pb-[40px] flex items-center">
                  <label className="mt-[15px] relative flex items-start cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer"
                      checked={checkedRows[item.id] || false}
                      onChange={() => handleSingleCheck(item.id)}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                        ${checkedRows[item.id] ? "bg-[#0EA5E9]" : "bg-white"} 
                        after:content-[''] after:absolute 
                        after:top-[2px] after:left-[5px] 
                        after:w-1.5 after:h-2.5 
                        after:border-white after:border-r-2 
                        after:border-b-2 after:rotate-45
                        ${checkedRows[item.id] ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </td>

                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {index + 1}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.id}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.name || "-"}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.course?.name || "-"}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.course_level?.name || "-"}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {formatDaysOfWeek(item.days_of_week)}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {formatTime(item.start_time, item.end_time)}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {formatDateRange(item.start_date, item.end_date)}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.student_count || 0}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.teacher?.user?.full_name || "-"}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {item.room?.name || "-"}
                  </Link>
                </td>
                <td>
                  <Link
                    className="px-6 flex1 items-center mt-[50px] whitespace-nowrap duration-300 ease-in-out hover:underline hover:text-[#28BBF8]"
                    to={`/groups/course/${item.id}`}
                  >
                    {getStatusText(item.status)}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Group Modal */}
      <AddGroupModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onSuccess={handleGroupCreated} />
    </>
  )
}

export default Group_main

