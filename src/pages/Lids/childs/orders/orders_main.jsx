import { useState, useRef, useEffect } from "react"
import Header from "./header"
import ColorPickerModal from "./color_picker"
import Add_modal from "./add_modal"

const Orders_lesson = () => {
  const [students, setStudents] = useState([
    {
      id: "123",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: false,
      num_color: "#00ffff",
    },
    {
      id: "23",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: false,
      num_color: "yellow",
    },
    {
      id: "13",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: false,
      num_color: "#ff0000",
    },
    {
      id: "12",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: false,
      num_color: "#ff0000",
    },
    {
      id: "34123",
      name: "Nuraliyev Muhammad Sodiq",
      phone: "+998 90 762 92 82",
      createdDate: "12.12.2024",
      firstLessonDate: "18.12.2024",
      teacher: "Falonchi Falonchiyev",
      course: "IT",
      level: "O'rta",
      moderator: "Ali Xasanov",
      checked: false,
      num_color: "#ff0000",
    },
  ])

  const [colorPickerState, setColorPickerState] = useState({
    isOpen: false,
    selectedStudentId: null,
  })

  const phoneRefs = useRef({})

  const handleAllChecked = (e) => {
    const checked = e.target.checked
    setStudents(students.map((student) => ({ ...student, checked })))
  }

  const handleSingleCheck = (id) => {
    setStudents(students.map((student) => (student.id === id ? { ...student, checked: !student.checked } : student)))
  }

  const handlePhoneClick = (studentId) => {
    setColorPickerState({
      isOpen: true,
      selectedStudentId: studentId,
    })
  }

  const handleColorSelect = (color) => {
    if (colorPickerState.selectedStudentId) {
      setStudents(
        students.map((student) =>
          student.id === colorPickerState.selectedStudentId ? { ...student, num_color: color } : student,
        ),
      )
      setColorPickerState((prev) => ({ ...prev, isOpen: false }))
    }
  }

  const getContrastColor = (hexColor) => {
    if (!hexColor) return "black"
    const r = Number.parseInt(hexColor.slice(1, 3), 16)
    const g = Number.parseInt(hexColor.slice(3, 5), 16)
    const b = Number.parseInt(hexColor.slice(5, 7), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128 ? "black" : "white"
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerState.isOpen) {
        let isClickInsideModal = false
        Object.values(phoneRefs.current).forEach((ref) => {
          if (ref && ref.contains(event.target)) {
            isClickInsideModal = true
          }
        })
        if (!isClickInsideModal) {
          setColorPickerState((prev) => ({ ...prev, isOpen: false }))
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [colorPickerState.isOpen])

  const [is_add_modal_open, set_is_add_modal_open] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header set_is_add_modal_open={set_is_add_modal_open}/>
      <div className="flex-col bg-white w-[96.1%] h-[calc(125vh-250px)] rounded-[10px] overflow-x-auto text-[#404040] my-[25px]">
        <div className="w-full py-[15px] px-[15px]">
          <table className="w-full border-none">
            <thead>
              <tr>
                <th className="w-12 p-2 text-left">
                  <div className="flex -mt-[8px] flex-row gap-[30px] pr-4 w-[100%]">
                    <label className="relative block cursor-pointer text-lg select-none">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                        checked={students.every((student) => student.checked)}
                        onChange={handleAllChecked}
                      />
                      <span
                        className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
              ${students.every((student) => student.checked) ? "bg-[#0EA5E9]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[2px] after:left-[5px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${students.every((student) => student.checked) ? "after:block" : "after:hidden"}`}
                      ></span>
                    </label>
                  </div>
                </th>
                <th className="w-12 p-2 text whitespace-nowrap-left ">№</th>
                <th className="p-2 text-left whitespace-nowrap">ID</th>
                <th className="p-2 text-left whitespace-nowrap">O'quvchining ismi</th>
                <th className="p-2 text-left whitespace-nowrap">Telefon raqami</th>
                <th className="p-2 text-left whitespace-nowrap">Yaratilgan sanasi</th>
                <th className="p-2 text-left whitespace-nowrap">Birinchi darsga kelish sanasi</th>
                <th className="p-2 text-left whitespace-nowrap">O'qituvchi</th>
                <th className="p-2 text-left whitespace-nowrap">Kurs</th>
                <th className="p-2 text-left whitespace-nowrap">Kurs darajasi</th>
                <th className="p-2 text-left whitespace-nowrap">Moderator</th>
              </tr>
            </thead>
            <tbody>
              {students.map((row, index) => (
                <tr key={row.id}>
                  <td className="p-2 py-[10px]">
                    <label className="-mt-[8px] relative block cursor-pointer text-lg select-none">
                      <input
                        type="checkbox"
                        className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                        checked={row.checked}
                        onChange={() => handleSingleCheck(row.id)}
                      />
                      <span
                        className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
              ${row.checked ? "bg-[#0EA5E9]" : "bg-white"} 
              after:content-[''] after:absolute 
              after:top-[2px] after:left-[5px] 
              after:w-1.5 after:h-2.5 
              after:border-white after:border-r-2 
              after:border-b-2 after:rotate-45
              ${row.checked ? "after:block" : "after:hidden"}`}
                      ></span>
                    </label>
                  </td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{index + 1}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.id}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.name}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">
                    <div className="relative" ref={(el) => (phoneRefs.current[row.id] = el)}>
                      <span
                        className="py-[7px] cursor-pointer active-105 rounded-[10px] px-[9px] inline-block"
                        style={{
                          background: row.num_color,
                          color: getContrastColor(row.num_color),
                        }}
                        onClick={() => handlePhoneClick(row.id)}
                      >
                        {row.phone}
                      </span>
                      {colorPickerState.isOpen && colorPickerState.selectedStudentId === row.id && (
                        <ColorPickerModal
                          onClose={() => setColorPickerState((prev) => ({ ...prev, isOpen: false }))}
                          onColorSelect={handleColorSelect}
                        />
                      )}
                    </div>
                  </td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.createdDate}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.firstLessonDate}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.teacher}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.course}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.level}</td>
                  <td className="p-2 py-[10px] whitespace-nowrap">{row.moderator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Add_modal is_add_modal_open={is_add_modal_open} set_is_add_modal_open={set_is_add_modal_open}/>
    </div>
  )
}

export default Orders_lesson