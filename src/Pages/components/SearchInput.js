import { CiSearch } from "react-icons/ci";

const SearchInput = ({
  dropdownRef,
  toggleDropdown,
  searchValue,
  isDropdownOpen,
  handleSearchInput,
  searchInputRef,
  handleSearchInputChange,
  handleSelectedAirport,
  cityName,
  path,
  placeholder,
  data,
  className,
}) => {
  return (
    <div
      ref={dropdownRef}
      className="col-span-6 text-sm font-normal text-[#4A4A4A] border-r px-3 py-2 text-left"
    >
      <button onClick={toggleDropdown} className="text-left">
        <p className="px-2">{path}</p>
        <p className="text-2xl font-extrabold px-2">{cityName}</p>

        {/* <input
          type="text"
          value={cityName}
          readOnly
          placeholder="Dhaka"
          className="text-2xl font-extrabold text-black px-2 leading-7 w-full outline-none cursor-pointer"
        /> */}

        <input
          type="text"
          name=""
          id=""
          value={searchValue}
          readOnly
          placeholder={placeholder}
          className="px-2 leading-7 w-full outline-none cursor-pointer"
        />
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute ${className} w-[60%] z-[1500] mt-2 origin-top-right bg-white shadow-[0px_0.5rem_1rem_0px_rgba(011,38,0,0.24)] rounded-lg`}
        >
          <div className="py-1">
            <div>
              <div className="py-5 px-4">
                <form onSubmit={handleSearchInput}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiSearch className="text-3xl text-[#ADACAD] pr-1" />
                    </div>
                    <input
                      ref={searchInputRef}
                      onChange={handleSearchInputChange}
                      type="search"
                      name="search"
                      id=""
                      className="block w-full p-3 pl-10 text-sm border border-[#F8F8F8] rounded-lg bg-white focus:outline-akij-red"
                      placeholder={"Airport code, city, name or country"}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="pb-5">
                <ul>
                  {data?.map((airport, i) => (
                    <li
                      onClick={() =>
                        handleSelectedAirport(
                          airport?.airport_name,
                          airport.city_name
                        )
                      }
                      key={i}
                      className="hover:bg-gray-100 py-2 px-4 text-slate-800 cursor-pointer flex items-start justify-between"
                    >
                      <div className="flex items-start gap-2.5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-2xl text-akij-red mt-1.5 rotate-45"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 336v-40L288 192V79.2c0-17.7-14.8-31.2-32-31.2s-32 13.5-32 31.2V192L64 296v40l160-48v113.6l-48 31.2V464l80-16 80 16v-31.2l-48-31.2V288l160 48z"></path>
                        </svg>
                        <div>
                          <p>{airport.city_name}</p>
                          <p className="text-sm text-slate-600">
                            {airport.airport_name}
                          </p>
                        </div>
                      </div>
                      <p>{airport.code}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchInput;
