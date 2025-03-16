import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import dropIcon from './imgs/arrow_down_black_icon.png'; // Make sure this path is correct

// CustomDropdown component (reused from your code)
const CustomDropdown = ({ options, placeholder, value, onChange, displayKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // Display value based on whether it's an object or simple value
  const getDisplayValue = () => {
    if (!value) return "";
    if (displayKey && typeof value === 'object') {
      return value[displayKey] || "";
    }
    return value;
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={getDisplayValue()}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          readOnly
          className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={dropIcon || "/placeholder.svg"} alt="dropdown icon" className="w-4 h-4" />
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {displayKey && typeof option === 'object' ? option[displayKey] : option}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

// MultiSelect component for days of week
const MultiSelect = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const newValue = [...value];
    const index = newValue.indexOf(option.value);
    
    if (index === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(index, 1);
    }
    
    onChange(newValue);
  };

  const getDisplayValue = () => {
    if (!value || value.length === 0) return "";
    return value.map(v => {
      const option = options.find(o => o.value === v);
      return option ? option.label : v;
    }).join(", ");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={getDisplayValue()}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          readOnly
          className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={dropIcon || "/placeholder.svg"} alt="dropdown icon" className="w-4 h-4" />
        </span>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => handleSelect(option)}
            >
              <input 
                type="checkbox" 
                checked={value.includes(option.value)} 
                onChange={() => {}} 
                className="mr-2"
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Time input component
const TimeInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

// Date input component
const DateInput = ({ value, onChange, placeholder, min }) => {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

// AddGroupModal component
const AddGroupModal = ({ isOpen, onClose, onSuccess }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  // Data for dropdowns
  const [courses, setCourses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [assistantTeachers, setAssistantTeachers] = useState([]);
  const [rooms, setRooms] = useState([]);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    course: null,
    course_level: null,
    types: 0,
    status: 0,
    days_of_week: [],
    start_time: "",
    end_time: "",
    start_date: "",
    end_date: "",
    teacher: null,
    assistant_teacher: [],
    room: null
  });

  // Days of week options
  const daysOfWeekOptions = [
    { value: "0", label: "Dushanba" },
    { value: "1", label: "Seshanba" },
    { value: "2", label: "Chorshanba" },
    { value: "3", label: "Payshanba" },
    { value: "4", label: "Juma" },
    { value: "5", label: "Shanba" },
    { value: "6", label: "Yakshanba" }
  ];

  // Status options
  const statusOptions = [
    { id: 0, name: "Active" },
    { id: 1, name: "Inactive" },
    { id: 2, name: "Completed" }
  ];

  // Types options
  const typeOptions = [
    { id: 0, name: "Regular" },
    { id: 1, name: "Intensive" },
    { id: 2, name: "Special" }
  ];

  // Modal animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
      fetchData();
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setShouldRender(false);
        resetForm();
      }, 300);
    }
  }, [isOpen]);

  // Fetch data for dropdowns
  const fetchData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      // Fetch courses
      const coursesResponse = await axios.get("https://backend.noonedu.uz/dashboard/courses/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (coursesResponse.data && coursesResponse.data.data) {
        setCourses(coursesResponse.data.data);
      }

      // Fetch teachers
      const teachersResponse = await axios.get("https://backend.noonedu.uz/dashboard/teachers/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (teachersResponse.data && teachersResponse.data.data) {
        setTeachers(teachersResponse.data.data);
        setAssistantTeachers(teachersResponse.data.data);
      }

      // Fetch rooms
      const roomsResponse = await axios.get("https://backend.noonedu.uz/dashboard/rooms/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (roomsResponse.data && roomsResponse.data.data) {
        setRooms(roomsResponse.data.data);
      }

    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update course levels when course changes
  useEffect(() => {
    if (formData.course && formData.course.course_levels) {
      setLevels(formData.course.course_levels);
    } else {
      setLevels([]);
    }
  }, [formData.course]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      course: null,
      course_level: null,
      types: 0,
      status: 0,
      days_of_week: [],
      start_time: "",
      end_time: "",
      start_date: "",
      end_date: "",
      teacher: null,
      assistant_teacher: [],
      room: null
    });
    setError("");
    setSuccess(false);
  };

  // Submit form
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    
    try {
      // Validate required fields
      if (!formData.name) throw new Error("Group name is required");
      if (!formData.course) throw new Error("Course is required");
      if (!formData.days_of_week.length) throw new Error("Please select at least one day");
      if (!formData.start_time) throw new Error("Start time is required");
      if (!formData.end_time) throw new Error("End time is required");
      if (!formData.start_date) throw new Error("Start date is required");
      if (!formData.end_date) throw new Error("End date is required");
      if (!formData.teacher) throw new Error("Teacher is required");
      
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }
      
      // Prepare data for API
      const apiData = {
        name: formData.name,
        course: formData.course.id,
        course_level: formData.course_level ? formData.course_level.id : null,
        types: formData.types,
        status: formData.status,
        days_of_week: formData.days_of_week,
        start_time: formData.start_time,
        end_time: formData.end_time,
        start_date: formData.start_date,
        end_date: formData.end_date,
        teacher: formData.teacher.id,
        assistant_teacher: formData.assistant_teacher.map(t => t.id),
        room: formData.room ? formData.room.id : null
      };
      
      // Send request to API
      const response = await axios.post(
        "https://backend.noonedu.uz/dashboard/groups/create/",
        apiData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      
      setSuccess(true);
      if (onSuccess) onSuccess(response.data);
      
      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 1500);
      
    } catch (err) {
      console.error("Error creating group:", err);
      setError(err.message || "Failed to create group. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`fixed h-[62.6vw] inset-0 bg-black/30 flex backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative mt-[50px] bg-white gap-5 rounded-[20px] w-[800px] max-h-[90vh] overflow-y-auto z-50 transition-all duration-300 ease-out ${
          isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <h2 className="font-roboto font-[500] p-6 text-[20px] leading-[23.44px] uppercase text-black text-center sticky top-0 bg-white">
          Yangi guruh qo'shish
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-6 mb-4">
            <p>{error}</p>
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mx-6 mb-4">
            <p>Guruh muvaffaqiyatli yaratildi!</p>
          </div>
        )}
        
        <div className="flex flex-col w-[90%] m-auto gap-5 pb-6">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Guruh nomi *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Guruh nomini kiriting"
                className="w-full h-[45px] p-2 border border-gray-300 text-black text-[17px] bg-[#F2EEEE] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Kurs *
              </label>
              <CustomDropdown
                options={courses}
                placeholder="Kursni tanlang"
                value={formData.course}
                onChange={(value) => handleInputChange("course", value)}
                displayKey="name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Daraja
              </label>
              <CustomDropdown
                options={levels}
                placeholder="Darajani tanlang"
                value={formData.course_level}
                onChange={(value) => handleInputChange("course_level", value)}
                displayKey="name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Turi
              </label>
              <CustomDropdown
                options={typeOptions}
                placeholder="Turini tanlang"
                value={typeOptions.find(t => t.id === formData.types)}
                onChange={(value) => handleInputChange("types", value.id)}
                displayKey="name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Holati
              </label>
              <CustomDropdown
                options={statusOptions}
                placeholder="Holatini tanlang"
                value={statusOptions.find(s => s.id === formData.status)}
                onChange={(value) => handleInputChange("status", value.id)}
                displayKey="name"
              />
            </div>
          </div>
          
          {/* Schedule Information */}
          <h3 className="font-roboto font-[500] text-[18px] leading-[21.09px] text-black mt-4">
            Dars jadvali
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Kunlar *
              </label>
              <MultiSelect
                options={daysOfWeekOptions}
                placeholder="Kunlarni tanlang"
                value={formData.days_of_week}
                onChange={(value) => handleInputChange("days_of_week", value)}
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Boshlanish vaqti *
              </label>
              <TimeInput
                value={formData.start_time}
                onChange={(value) => handleInputChange("start_time", value)}
                placeholder="00:00"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Tugash vaqti *
              </label>
              <TimeInput
                value={formData.end_time}
                onChange={(value) => handleInputChange("end_time", value)}
                placeholder="00:00"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Boshlanish sanasi *
              </label>
              <DateInput
                value={formData.start_date}
                onChange={(value) => handleInputChange("start_date", value)}
                placeholder="DD/MM/YYYY"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Tugash sanasi *
              </label>
              <DateInput
                value={formData.end_date}
                onChange={(value) => handleInputChange("end_date", value)}
                placeholder="DD/MM/YYYY"
                min={formData.start_date}
              />
            </div>
          </div>
          
          {/* Teacher Information */}
          <h3 className="font-roboto font-[500] text-[18px] leading-[21.09px] text-black mt-4">
            O'qituvchi va xona
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                O'qituvchi *
              </label>
              <CustomDropdown
                options={teachers}
                placeholder="O'qituvchini tanlang"
                value={formData.teacher}
                onChange={(value) => handleInputChange("teacher", value)}
                displayKey="user.full_name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Yordamchi o'qituvchi
              </label>
              <CustomDropdown
                options={assistantTeachers}
                placeholder="Yordamchi o'qituvchini tanlang"
                value={formData.assistant_teacher[0] || null}
                onChange={(value) => handleInputChange("assistant_teacher", [value])}
                displayKey="user.full_name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-roboto font-[400] block text-[18px] leading-[21.09px] text-black">
                Xona
              </label>
              <CustomDropdown
                options={rooms}
                placeholder="Xonani tanlang"
                value={formData.room}
                onChange={(value) => handleInputChange("room", value)}
                displayKey="name"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center gap-4 my-6 w-[60%] m-auto">
          <button
            onClick={onClose}
            className="font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[4px] bg-gray-200 text-black hover:bg-gray-300 hover:scale-105 active:scale-95 duration-300"
            disabled={loading}
          >
            Bekor qilish
          </button>
          <button
            onClick={handleSubmit}
            className={`font-roboto font-[400] text-[20px] leading-[23.44px] px-7 py-3 rounded-[5px] bg-[#0D99FF] text-white hover:bg-[#0D89FF] hover:scale-105 active:scale-95 duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Yuklanmoqda..." : "Saqlash"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupModal;
