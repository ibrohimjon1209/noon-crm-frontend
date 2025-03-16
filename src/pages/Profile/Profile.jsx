"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, CircleUser } from "lucide-react"
import axios from "axios"
import icon_1 from './Images/icon_1.svg'
import icon_2 from './Images/icon_2.svg'
import icon_3 from './Images/icon_3.svg'
import star from './Images/star.svg'

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Financial info structure
  const financialInfo = [
    { name: "davomat", key: "attendance", defaultValue: "0" },
    { name: "davomatdan foizi", key: "attendance_percentage", defaultValue: "0" },
    { name: "avans", key: "advance", defaultValue: "0" },
    { name: "jarima", key: "penalty", defaultValue: "0" },
    { name: "aklad", key: "salary_base", defaultValue: "0" },
    { name: "oylik", key: "salary", defaultValue: "0" },
    { name: "to'lanmagan", key: "unpaid", defaultValue: "0" },
  ]

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)

      try {
        const storedUserData = localStorage.getItem("userData")
        const token = localStorage.getItem("token")

        if (!token) {
          console.warn("Token topilmadi, login sahifasiga yo'naltirilmoqda")
          throw new Error("No authentication token found")
        }

        if (storedUserData) {
          console.log("LocalStorage'dan userData olindi:", storedUserData)
          setUserData(JSON.parse(storedUserData))

          // Verify token is still valid by making a lightweight API call
          try {
            await axios.get("https://backend.noonedu.uz/account/profile/", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
          } catch (verifyError) {
            // If token verification fails, clear storage and redirect to login
            if (verifyError.response && (verifyError.response.status === 401 || verifyError.response.status === 403)) {
              localStorage.removeItem("token")
              localStorage.removeItem("userData")
              localStorage.removeItem("refreshToken")
              throw new Error("Token invalid or expired")
            }
          }
        } else {
          console.log("Token mavjud, API so'rov yuborilyapti:", token)

          const response = await axios.get("https://backend.noonedu.uz/account/profile/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          console.log("API response:", response.data)

          setUserData(response.data)
          localStorage.setItem("userData", JSON.stringify(response.data))
        }
      } catch (err) {
        console.error("Error fetching user data:", err)
        setError("Failed to load user data. Please try logging in again.")

        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          console.warn("Token eskirgan yoki noto'g'ri, o'chirilmoqda")
          localStorage.removeItem("token")
          localStorage.removeItem("userData")
          localStorage.removeItem("refreshToken")
          navigate("/login")
        } else if (err.message === "No authentication token found" || err.message === "Token invalid or expired") {
          navigate("/login")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [navigate])

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    localStorage.removeItem("refreshToken")

    // Dispatch a custom event to notify other components about logout
    window.dispatchEvent(new Event("auth-change"))

    navigate("/login")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading profile data...</p>
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
            onClick={() => navigate("/login")}
          >
            Return to Login
          </button>
          <button
          onClick={handleLogout}
          className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Chiqish
        </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pl-[32px] pt-[32px] pr-[32px]">
      <div className="w-full h-[80px] pl-[17px] flex items-center justify-between rounded-[12px] bg-white">
        <div className="flex items-center gap-[12px]">
          <ChevronLeft
            color="#747474"
            width={"30px"}
            height={"50px"}
            className="cursor-pointer"
            onClick={handleGoBack}
          />
          <h1 className="font-inter font-[500] text-[22px] leading-[26.63px] text-[#404040]">Xodimlar ro'yhati</h1>
        </div>
        <button
          onClick={handleLogout}
          className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Chiqish
        </button>
      </div>

      <div className="flex gap-[20px] mt-[10px]">
        <div className="w-[50%] h-[450px] bg-white rounded-[12px] flex">
          <div className="w-[25%] h-full"></div>
          <div className="w-[50%] h-full flex flex-col items-center pt-[41px]">
            <div>
              <CircleUser width={"180px"} height={"180px"} />
            </div>
            <div className="flex flex-col text-center gap-[15px] mt-[20px]">
              <h1 className="font-inter font-[500] text-[26px] leading-[31.47px] text-[#404040]">
                {userData?.full_name || "User Name"}
              </h1>
              <h1 className="font-inter font-[500] text-[22px] leading-[26.63px] text-[#747474]">
                {userData?.status_text || "Role"}
              </h1>
              <h1 className="font-inter font-[500] text-[22px] leading-[26.63px] text-[#747474]">
                {userData?.phone_number || "+998 XX XXX XX XX"}
              </h1>
            </div>
          </div>
          <div className="w-[25%] h-full flex flex-col justify-between">
            <div className="flex justify-end p-[20px] gap-[20px]">
              <button className="w-[30px] h-[30px] cursor-pointer">
                <img src={icon_1} alt="Add Password" width={30} height={30} />
              </button>
              <button className="w-[30px] h-[30px] cursor-pointer">
                <img src={icon_2} alt="Archive" width={30} height={30} />
              </button>
              <button className="w-[30px] h-[30px] cursor-pointer">
                <img src={icon_3} alt="Rename" width={30} height={30} />
              </button>
            </div>
            <div className="w-full h-[44px] flex items-center justify-end pb-[20px] pr-[24px]">
              <h1 className="font-roboto font-[500] text-[18px] leading-[21.09px] text-[#0D99FF] uppercase">
                reyting <span className="text-[#FFCC00] text-[20px]">{userData?.rating || "5"}</span>
              </h1>
              <img src={star} alt="Star" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[450px] bg-white rounded-[12px] pt-[15px]">
          {financialInfo.map((item, index) => (
            <div
              key={index}
              className="w-full h-[60px] border-b-[1px] pl-[30px] pr-[46px] flex justify-between items-center"
            >
              <h1 className="font-roboto font-[400] capitalize text-[20px] leading-[23.44px] text-[#404040]">
                {item.name}
              </h1>
              <h1 className="font-roboto font-[400] text-[20px] leading-[23.44px] text-[#747474]">
                {userData?.[item.key] || item.defaultValue} UZS
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {/* Nav_profile component would go here */}
        <div className="bg-white p-4 rounded-[12px]">
          <h2 className="text-xl font-medium text-[#404040]">Profile Navigation</h2>
          <p className="text-[#747474]">Additional profile navigation would appear here</p>
        </div>
      </div>
    </div>
  )
}

export default Profile

