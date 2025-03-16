"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import calendar_icon from "./images/calendar_black.png"
import arrow_down_black_icon from "./images/arrow_down_black_icon.png"

const Add_modal = ({ isOpen, onClose, onSuccess }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [calendar_value, set_calendar_value] = useState("dd.mm.yyyyy")
  const [exercise_value, set_exercise_value] = useState("Topshiriq turi")
  const [worker_value, set_worker_value] = useState("Xodim")
  const [type_value, set_type_value] = useState("Turi")
  const [comment, setComment] = useState("")
  const [is_type_open, set_is_type_open] = useState(false)
  const [is_exercise_open, set_is_exercise_open] = useState(false)
  const [is_calendar_open, set_is_calendar_open] = useState(false)
  const [is_worker_open, set_is_worker_open] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [availableMethods, setAvailableMethods] = useState([])

  // Data for dropdowns
  const [taskTypes, setTaskTypes] = useState([])
  const [workers, setWorkers] = useState([])
  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])
  const [leads, setLeads] = useState([])

  // Selected values for API
  const [selectedTaskType, setSelectedTaskType] = useState(null)
  const [selectedWorker, setSelectedWorker] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [selectedLead, setSelectedLead] = useState(null)

  const minutesInputRef = useRef(null)

  // Fetch data when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchData()
      checkAvailableMethods()
    }
  }, [isOpen])

  // Check available HTTP methods for the assignments endpoint
  const checkAvailableMethods = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return

      // Try OPTIONS request to check available methods
      const response = await axios.options("https://backend.noonedu.uz/dashboard/assignments/", {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.headers && response.headers.allow) {
        const methods = response.headers.allow.split(", ")
        setAvailableMethods(methods)
        console.log("Available methods:", methods)
      }
    } catch (err) {
      console.error("Error checking available methods:", err)
    }
  }

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setError("Authentication token not found")
        return
      }

      // Fetch task types
      try {
        const taskTypesResponse = await axios.get("https://backend.noonedu.uz/dashboard/assignment-types/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (taskTypesResponse.data && taskTypesResponse.data.data) {
          setTaskTypes(taskTypesResponse.data.data)
        }
      } catch (err) {
        console.error("Error fetching task types:", err)
      }

      // Fetch workers (moderators)
      try {
        const moderatorsResponse = await axios.get("https://backend.noonedu.uz/dashboard/moderators/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (moderatorsResponse.data && moderatorsResponse.data.data) {
          setWorkers(moderatorsResponse.data.data)
        }
      } catch (err) {
        console.error("Error fetching moderators:", err)
      }

      // Fetch students
      try {
        const studentsResponse = await axios.get("https://backend.noonedu.uz/dashboard/students/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (studentsResponse.data && studentsResponse.data.data) {
          setStudents(studentsResponse.data.data)
        }
      } catch (err) {
        console.error("Error fetching students:", err)
      }

      // Fetch groups
      try {
        const groupsResponse = await axios.get("https://backend.noonedu.uz/dashboard/groups/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (groupsResponse.data && groupsResponse.data.data) {
          setGroups(groupsResponse.data.data)
        }
      } catch (err) {
        console.error("Error fetching groups:", err)
      }

      // Fetch leads
      try {
        const leadsResponse = await axios.get("https://backend.noonedu.uz/dashboard/leads/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (leadsResponse.data && leadsResponse.data.data) {
          setLeads(leadsResponse.data.data)
        }
      } catch (err) {
        console.error("Error fetching leads:", err)
      }
    } catch (err) {
      console.error("Error fetching data:", err)
      setError("Failed to load data")
    }
  }

  const handle_select_human = (human) => {
    set_worker_value(human.user?.full_name || human.name || "Unknown")
    setSelectedWorker(human.id)
    set_is_worker_open(false)
  }

  const handle_select_exercise = (exercise) => {
    set_exercise_value(exercise.task_type_name || exercise.name || "Unknown")
    setSelectedTaskType(exercise.id)
    set_is_exercise_open(false)
  }

  const handle_select_type = (type) => {
    set_type_value(type)
    set_is_type_open(false)

    // Reset selections based on type
    if (type === "O'qituvchi") {
      setSelectedStudent(null)
      setSelectedLead(null)
    } else if (type === "Moderator") {
      setSelectedStudent(null)
      setSelectedLead(null)
    } else if (type === "O'quvchi") {
      setSelectedWorker(null)
      setSelectedLead(null)
    } else if (type === "Lead") {
      setSelectedWorker(null)
      setSelectedStudent(null)
    }
  }

  const handleTimeChange = (value, setter, max, nextInput) => {
    const numericValue = value.replace(/[^0-9]/g, "")

    if (numericValue.length <= 2) {
      setter(numericValue)

      if (Number.parseInt(numericValue) > max) {
        setter(max.toString().padStart(2, "0"))
      }

      if (numericValue.length === 2 && nextInput && nextInput.current) {
        nextInput.current.focus()
      }
    }
  }

  const isHoursInvalid = Number.parseInt(hours) > 23
  const isMinutesInvalid = Number.parseInt(minutes) > 59

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + increment)
    setCurrentDate(newDate)
  }

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 0)
    return date.getDate()
  }

  const getStartDayOfMonth = (year, month) => {
    const date = new Date(year, month - 1, 1)
    const day = date.getDay()
    return day === 0 ? 6 : day - 1
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1)
    const startDay = getStartDayOfMonth(currentDate.getFullYear(), currentDate.getMonth() + 1)
    const days = []

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-transparent"></div>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayValue = `${String(i).padStart(2, "0")}.${String(currentDate.getMonth() + 1).padStart(
        2,
        "0",
      )}.${currentDate.getFullYear()}`
      const isSelected = calendar_value === dayValue

      days.push(
        <div
          key={i}
          onClick={() => {
            set_calendar_value(dayValue)
            set_is_calendar_open(false)
          }}
          className={`text-center text-black font-[inter] text-[13px] font-medium py-[4px] cursor-pointer rounded-[5px] ${
            isSelected ? "bg-[rgba(38,78,134,1)] text-white" : "hover:bg-[#f0f0f0]"
          }`}
        >
          {i}
        </div>,
      )
    }

    return days
  }

  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ]

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
      setTimeout(() => setShouldRender(false), 300) // Match this with the transition duration
    }
  }, [isOpen])

  // Format date from DD.MM.YYYY to YYYY-MM-DD for API
  const formatDateForApi = (dateString) => {
    if (dateString === "dd.mm.yyyyy") return ""

    const parts = dateString.split(".")
    if (parts.length !== 3) return ""

    return `${parts[2]}-${parts[1]}-${parts[0]}`
  }

  // Format time from HH:MM to HH:MM:00 for API
  const formatTimeForApi = () => {
    if (!hours || !minutes) return ""

    const formattedHours = hours.padStart(2, "0")
    const formattedMinutes = minutes.padStart(2, "0")

    return `${formattedHours}:${formattedMinutes}:00`
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError("")

      // Validate required fields
      if (calendar_value === "dd.mm.yyyyy") {
        setError("Please select a date")
        setLoading(false)
        return
      }

      if (!hours || !minutes) {
        setError("Please enter time")
        setLoading(false)
        return
      }

      if (exercise_value === "Topshiriq turi" || !selectedTaskType) {
        setError("Please select a task type")
        setLoading(false)
        return
      }

      if (!comment) {
        setError("Please enter a comment")
        setLoading(false)
        return
      }

      const token = localStorage.getItem("token")
      if (!token) {
        setError("Authentication token not found")
        setLoading(false)
        return
      }

      // Get branch from localStorage or use default
      const userData = JSON.parse(localStorage.getItem("userData") || "{}")
      const branch = userData.branch || 1 // Use numeric value as default

      // Prepare data for API - simplified format
      const apiData = {
        task_type: selectedTaskType,
        branch: branch,
        date: formatDateForApi(calendar_value),
        time: formatTimeForApi(),
        comment: comment,
      }

      // Add the appropriate person type based on selection
      if (type_value === "Moderator" && selectedWorker) {
        apiData.moderator = selectedWorker
      } else if (type_value === "O'quvchi" && selectedStudent) {
        apiData.student = selectedStudent
      } else if (type_value === "Lead" && selectedLead) {
        apiData.lead = selectedLead
      }

      console.log("Sending data:", apiData)

      // Try different approaches
      let response = null
      let error = null

      // Approach 1: Try the create endpoint with POST
      try {
        response = await axios.post("https://backend.noonedu.uz/dashboard/assignments/create/", apiData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        console.log("Create endpoint success:", response)
      } catch (err) {
        console.log("Create endpoint failed:", err)
        error = err
      }

      // Approach 2: Try the main endpoint with POST
      if (!response) {
        try {
          response = await axios.post("https://backend.noonedu.uz/dashboard/assignments/", apiData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          console.log("Main endpoint POST success:", response)
        } catch (err) {
          console.log("Main endpoint POST failed:", err)
          error = err
        }
      }

      // Approach 3: Try adding a trailing slash
      if (!response) {
        try {
          response = await axios.post("https://backend.noonedu.uz/dashboard/assignments/create", apiData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          console.log("Create without slash success:", response)
        } catch (err) {
          console.log("Create without slash failed:", err)
          error = err
        }
      }

      // Approach 4: Try with a different data structure
      if (!response) {
        const alternativeData = {
          ...apiData,
          type: 0,
          completion: false,
          group: null,
        }

        try {
          response = await axios.post("https://backend.noonedu.uz/dashboard/assignments/create/", alternativeData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          console.log("Alternative data structure success:", response)
        } catch (err) {
          console.log("Alternative data structure failed:", err)
          error = err
        }
      }

      // Handle success
      if (response && (response.status === 200 || response.status === 201)) {
        // Reset form
        set_calendar_value("dd.mm.yyyyy")
        setHours("")
        setMinutes("")
        set_exercise_value("Topshiriq turi")
        set_worker_value("Xodim")
        set_type_value("Turi")
        setComment("")
        setSelectedTaskType(null)
        setSelectedWorker(null)
        setSelectedStudent(null)
        setSelectedGroup(null)
        setSelectedLead(null)

        // Close modal
        onClose()

        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess()
        }
      } else {
        // If all approaches failed, throw the last error
        if (error) {
          throw error
        } else {
          throw new Error("Failed to create assignment after multiple attempts")
        }
      }
    } catch (err) {
      console.error("Error creating assignment:", err)
      if (err.response && err.response.data) {
        console.log("Server error details:", err.response.data)

        // More detailed error message
        let errorMessage = "Failed to create assignment"

        if (err.response.data.detail) {
          errorMessage = err.response.data.detail
        } else if (err.response.data.message) {
          errorMessage = err.response.data.message
        } else if (typeof err.response.data === "object") {
          // Try to extract field-specific errors
          const fieldErrors = Object.entries(err.response.data)
            .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
            .join("; ")

          if (fieldErrors) {
            errorMessage = `Validation errors: ${fieldErrors}`
          }
        }

        setError(errorMessage)
      } else {
        setError("Failed to create assignment. Please check your connection.")
      }
    } finally {
      setLoading(false)
    }
  }

  if (!shouldRender) return null

  return (
    <div className="w-full h-[135vh] fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          onClose()
          set_is_calendar_open(false)
        }}
      ></div>
      <div
        className={`relative bg-white rounded-[20px] w-[625px] h-[630px] z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-1 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center pt-6 px-8 mb-6">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] uppercase text-black">Topshiriq</h2>
          <button
            onClick={onClose}
            className="text-black text-[20px] text-black font-roboto font-[800] hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <hr className="border-[#00000080] w-[100%]" />

        {error && <div className="mx-10 mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

        <div className="w-full h-full flex flex-col items-center px-10 pt-8 gap-[28px]">
          <div className="w-full flex flex-row gap-[40px]">
            <div className="w-full h-[58px] bg-[#F2EEEE] rounded">
              <div className="w-[253px] h-[55px] bg-transparent relative">
                <div
                  className={`h-[55px] w-[250px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                  onClick={() => set_is_calendar_open(!is_calendar_open)}
                >
                  <p className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                    {calendar_value}
                  </p>
                  <img
                    src={calendar_icon || "/placeholder.svg"}
                    className={`w-[33px] h-[33px] object-contain duration-[0.3s]`}
                    alt=""
                  />
                </div>
                <div
                  className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[14] overflow-hidden transition-all duration-[300ms] ease-out ${
                    is_calendar_open
                      ? `h-[286px] mt-[5px] border-[1.5px] overflow-hidden menu_scroll`
                      : "h-0 border-[0px]"
                  }`}
                >
                  <div className="flex justify-between items-center p-[22px]">
                    <button onClick={() => changeMonth(-1)} className="cursor-pointer">
                      <img
                        src={arrow_down_black_icon || "/placeholder.svg"}
                        className="w-[25px] h-[25px] object-contain rotate-90"
                        alt=""
                      />
                    </button>
                    <p className="font-[700] font-[inter] text-[14px] text-black tracking-[-0.5px]">
                      {monthNames[currentDate.getMonth()]}{" "}
                      <span className="font-[400]">{currentDate.getFullYear()}</span>
                    </p>
                    <button onClick={() => changeMonth(1)} className="cursor-pointer">
                      <img
                        src={arrow_down_black_icon || "/placeholder.svg"}
                        className="w-[25px] h-[25px] object-contain -rotate-90"
                        alt=""
                      />
                    </button>
                  </div>
                  <hr className="border-[#0000001A] border-[1.5px] w-[84%] mx-auto -mt-[3px]" />
                  <div className="grid grid-cols-7 mt-[10px] mx-[11px] font-[inter] font-[500] leading-[12.1px] text-center text-[#292A34] text-[11.5px] font-medium mb-[10px]">
                    <p>Du</p>
                    <p>Se</p>
                    <p>Ch</p>
                    <p>Pa</p>
                    <p>Ju</p>
                    <p>Sh</p>
                    <p>Ya</p>
                  </div>
                  <div className="grid grid-cols-7 mt-[25px] px-[10px]">{renderCalendar()}</div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center h-[58px] bg-[#F2EEEE] rounded">
              <div className="w-[82%] h-full flex items-center">
                <div className="flex gap-[2px] items-center h-full w-full font-inter font-[500] text-black text-[18px]">
                  <input
                    type="text"
                    id="hours"
                    value={hours}
                    onChange={(e) => handleTimeChange(e.target.value, setHours, 23, minutesInputRef)}
                    className={`w-6 text-center rounded-md ${isHoursInvalid ? "bg-red-100" : "bg-[#F2EEEE]"}`}
                    placeholder="00"
                    maxLength={2}
                  />
                  <span>:</span>
                  <input
                    type="text"
                    id="minutes"
                    ref={minutesInputRef}
                    value={minutes}
                    onChange={(e) => handleTimeChange(e.target.value, setMinutes, 59)}
                    className={`w-6 text-center rounded-md ${isMinutesInvalid ? "bg-red-100" : "bg-[#F2EEEE]"}`}
                    placeholder="00"
                    maxLength={2}
                  />
                </div>
                <button
                  className="text-[black] text-[20px] font-inter font-[800]"
                  onClick={() => {
                    setHours(""), setMinutes("")
                  }}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_worker_open(!is_worker_open)}
              >
                <p className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                  {worker_value}
                </p>
                <img
                  src={arrow_down_black_icon || "/placeholder.svg"}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_worker_open ? "-rotate-180" : ""}`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[13] overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_worker_open
                    ? `h-[200px] mt-[5px] pb-[5px] border-[1.5px] overflow-y-scroll menu_scroll`
                    : "h-0 border-0"
                }`}
              >
                <ul className="flex flex-col">
                  {type_value === "Moderator" &&
                    workers.map((item, index) => (
                      <li
                        key={index}
                        className={`px-4 py-2 ${
                          worker_value === (item.user?.full_name || item.name) ? "bg-[#CFEBFF] text-[#264E86]" : ""
                        } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                        onClick={() => handle_select_human(item)}
                      >
                        {item.user?.full_name || item.name || "Unknown"}
                      </li>
                    ))}

                  {type_value === "O'quvchi" &&
                    students.map((item, index) => (
                      <li
                        key={index}
                        className={`px-4 py-2 ${
                          worker_value === (item.user?.full_name || item.name) ? "bg-[#CFEBFF] text-[#264E86]" : ""
                        } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                        onClick={() => {
                          handle_select_human(item)
                          setSelectedStudent(item.id)
                        }}
                      >
                        {item.user?.full_name || item.name || "Unknown"}
                      </li>
                    ))}

                  {type_value === "Lead" &&
                    leads.map((item, index) => (
                      <li
                        key={index}
                        className={`px-4 py-2 ${
                          worker_value === (item.full_name || item.name) ? "bg-[#CFEBFF] text-[#264E86]" : ""
                        } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                        onClick={() => {
                          handle_select_human(item)
                          setSelectedLead(item.id)
                        }}
                      >
                        {item.full_name || item.name || "Unknown"}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_exercise_open(!is_exercise_open)}
              >
                <p className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                  {exercise_value}
                </p>
                <img
                  src={arrow_down_black_icon || "/placeholder.svg"}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${
                    is_exercise_open ? "-rotate-180" : ""
                  }`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-[12] overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_exercise_open
                    ? `h-[200px] mt-[5px] pb-[5px] border-[1.5px] overflow-y-scroll menu_scroll`
                    : "h-0 border-0"
                }`}
              >
                <ul className="flex flex-col">
                  {taskTypes.map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${
                        exercise_value === item.task_type_name ? "bg-[#CFEBFF] text-[#264E86]" : ""
                      } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_exercise(item)}
                    >
                      {item.task_type_name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE] flex items-center justify-center">
            <div className="w-[100%] h-[55px] bg-transparent rounded-[5px] relative">
              <div
                className={`h-[55px] cursor-pointer flex items-center rounded-[5px] justify-between px-[25px]`}
                onClick={() => set_is_type_open(!is_type_open)}
              >
                <p className={`font-roboto font-[500] text-[19px] whitespace-nowrap leading-[23.44px] text-black`}>
                  {type_value}
                </p>
                <img
                  src={arrow_down_black_icon || "/placeholder.svg"}
                  className={`w-[31px] h-[31px] object-contain duration-[0.3s] ${is_type_open ? "-rotate-180" : ""}`}
                  alt=""
                />
              </div>
              <div
                className={`absolute top-[60px] left-0 w-full bg-white border-[#C5C5C5] shadow-md rounded-[5px] z-10 overflow-hidden transition-all duration-[300ms] ease-out ${
                  is_type_open
                    ? `h-[150px] mt-[5px] pb-[5px] border-[1.5px] overflow-y-scroll menu_scroll`
                    : "h-0 border-0"
                }`}
              >
                <ul className="flex flex-col">
                  {["Moderator", "O'quvchi", "Lead"].map((item, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${
                        type_value === item ? "bg-[#CFEBFF] text-[#264E86]" : ""
                      } hover:duration-[0.1s] hover:bg-[#CFEBFF] hover:text-[#264E86] text-[#494949] cursor-pointer`}
                      onClick={() => handle_select_type(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] bg-[#F2EEEE]">
            <input
              type="text"
              className="w-full h-full bg-transparent px-5 font-roboto font-[500] text-[19px] leading-[23.44px] text-black"
              placeholder="Izoh"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            className={`w-[142px] h-[63px] hover:scale-105 active:scale-95 duration-300 bg-[#0D99FF] rounded-[5px] flex justify-center items-center cursor-pointer font-roboto font-[400] text-[20px] leading-[23.44px] text-white ${loading ? "opacity-70" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Yuklanmoqda..." : "Saqlash"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Add_modal

