import React from "react"

const Color_picker_modal = ({ onColorSelect }) => {
  const colors = [
    { label: "Noto'g'ri raqam", color: "#ff0000" },
    { label: "Bog'lanildi", color: "#4CAF50" },
    { label: "Keyinroq bog'lanish", color: "#FFD700" },
    { label: "Ko'tarmadi", color: "#FF8C00" },
    { label: "Onlayn kurs", color: "#00BFFF" },
    { label: "Level testga kelish", color: "#9C27B0" },
    { label: "Keyinchalik keladi", color: "#795548" },
    { label: "Adashib qoldirgan", color: "#000000" },
  ]

  return (
    <div className="fixed z-50 rounded border -ml-[26px]">
      {/* Triangular caret */}
      <div className="absolute left-[45%] border -top-2 w-4 h-4 bg-white transform rotate-45" />

      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
        <div className="space-y-2">
          {colors.map((item) => (
            <button
              key={item.color}
              className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md"
              onClick={() => onColorSelect(item.color)}
            >
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Color_picker_modal;