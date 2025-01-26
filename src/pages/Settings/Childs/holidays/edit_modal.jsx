import React, { useState, useEffect } from "react";
import calendarIcon from "../../../assigments/images/calendar_icon.png";

const EditModal = ({ isOpen, onClose, initialData, onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    title: "",
    start_time: "",
    end_time: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-[10px] p-6 w-[400px] z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[18px] font-medium">BAYRAM KUNLARINI TAHRIRLASH</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-[14px] text-gray-700">Sarlavha</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[14px] text-gray-700">
              Boshlanish kuni
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.start_time}
                onChange={(e) =>
                  setFormData({ ...formData, start_time: e.target.value })
                }
                placeholder="mm/dd/yyyy"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <img
                src={calendarIcon || "/placeholder.svg"}
                alt="Calendar"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[14px] text-gray-700">Tugash kuni</label>
            <div className="relative">
              <input
                type="text"
                value={formData.end_time}
                onChange={(e) =>
                  setFormData({ ...formData, end_time: e.target.value })
                }
                placeholder="mm/dd/yyyy"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <img
                src={calendarIcon || "/placeholder.svg"}
                alt="Calendar"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#0D99FF] text-white rounded-md hover:bg-[#0D89FF]"
            onClick={onClose}
          >
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;