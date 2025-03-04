"use client";

import { useState, useEffect } from "react";

function Students_list_filter({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [balanceRange, setBalanceRange] = useState("");
  const [course, setCourse] = useState("");
  const [subcourse, setSubcourse] = useState("");
  const [source, setSource] = useState("");
  const [moderator, setModerator] = useState("");
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState("");
  const [category, setCategory] = useState("");
  const [byColors, setByColors] = useState("");
  const [groupCount, setGroupCount] = useState("");
  const [appStatus, setAppStatus] = useState("");
  const [tags, setTags] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [date, setDate] = useState("");
  const [activityType, setActivityType] = useState("");
  const [schools, setSchools] = useState("");
  const [schoolsFilter, setSchoolsFilter] = useState("");
  const [whichSchool, setWhichSchool] = useState("");
  const [dfs, setDfs] = useState("");
  const [uhuh, setUhuh] = useState("");
  const [isTashkent, setIsTashkent] = useState("");
  const [itStation, setItStation] = useState("");
  const [renesansedu, setRenesansedu] = useState("");
  const [sdfasdf, setSdfasdf] = useState("");
  const [sdfsdf, setSdfsdf] = useState("");
  const resetForm = () => {
    setStartDate("");
    setEndDate("");
    setBalanceRange("");
    setCourse("");
    setSubcourse("");
    setSource("");
    setModerator("");
    setTeacher("");
    setStudent("");
    setCategory("");
    setByColors("");
    setGroupCount("");
    setAppStatus("");
    setTags("");
    setIsBlocked(false);
    setDate("");
    setActivityType("");
    setSchools("");
    setSchoolsFilter("");
    setWhichSchool("");
    setDfs("");
    setUhuh("");
    setIsTashkent("");
    setItStation("");
    setRenesansedu("");
    setSdfasdf("");
    setSdfsdf("");
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 30);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="w-full fixed h-[1000px] inset-0 z-50 flex items-center justify-center">
      <div
        className={`w-full h-[135vh] fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white rounded-[10px] w-[800px] max-h-[90vh] overflow-y-auto z-50 transition-all duration-300 ease-out ${
          isAnimating
            ? "translate-y-1 opacity-100"
            : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="font-roboto font-[400] text-[20px] leading-[23.44px] text-black">
            Filter
          </h2>
          <button
            onClick={resetForm}
            className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-200 transition-colors"
          >
            Tozalash
          </button>
        </div>

        <div className="p-6 pt-0 grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Oraliqni tanlang
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <input
                type="date"
                className="w-full pl-10 p-2.5 border border-gray-300 rounded-md bg-white"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Sanani tanlang
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <input
                type="date"
                className="w-full pl-10 p-2.5 border border-gray-300 rounded-md bg-white"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Balans oraliği
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={balanceRange}
              onChange={(e) => setBalanceRange(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">Kurs</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">Subkurs</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={subcourse}
              onChange={(e) => setSubcourse(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">Manba</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Moderator
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={moderator}
              onChange={(e) => setModerator(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              O'qituvchi
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              O'quvchi
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={student}
              onChange={(e) => setStudent(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Kategoriya
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Ranglar bo'yicha
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={byColors}
              onChange={(e) => setByColors(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Guruhlar soni
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={groupCount}
              onChange={(e) => setGroupCount(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Ilova holati
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={appStatus}
              onChange={(e) => setAppStatus(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">Teglar</label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="flex items-center pt-8">
            <input
              type="checkbox"
              id="bloklanganglar"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={isBlocked}
              onChange={(e) => setIsBlocked(e.target.checked)}
            />
            <label
              htmlFor="bloklanganglar"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Bloklanganglar
            </label>
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">Tarix</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="Tarix"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Mashg'ulot turi
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Maktablar
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={schools}
              onChange={(e) => setSchools(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Maktablar
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={schoolsFilter}
              onChange={(e) => setSchoolsFilter(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Qaysi maktab
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={whichSchool}
              onChange={(e) => setWhichSchool(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">dfs</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="dfs"
              value={dfs}
              onChange={(e) => setDfs(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">uhuh</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="uhuh"
              value={uhuh}
              onChange={(e) => setUhuh(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              Toshkentlikmisiz
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white appearance-none"
              value={isTashkent}
              onChange={(e) => setIsTashkent(e.target.value)}
            >
              <option value="" disabled hidden>
                Tanlang
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              it station
            </label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="it station"
              value={itStation}
              onChange={(e) => setItStation(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">
              renesansedu.uz
            </label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="renesansedu.uz"
              value={renesansedu}
              onChange={(e) => setRenesansedu(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">sdfasdf</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="sdfasdf"
              value={sdfasdf}
              onChange={(e) => setSdfasdf(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="font-roboto text-sm text-gray-600">sdfsdf</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md bg-white"
              placeholder="sdfsdf"
              value={sdfsdf}
              onChange={(e) => setSdfsdf(e.target.value)}
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Orqaga
          </button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

export default Students_list_filter;
