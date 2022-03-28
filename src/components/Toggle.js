export const Toggle = ({name,label,reference}) => {
  return (
    <div className="flex items-center w-full mb-5">
      
      <label htmlFor={name}className="flex items-center cursor-pointer w-full">
      <div className="mr-2 sm:mr-10 text-gray-500 text-md sm:text-2xl  font-medium">
          {label}
        </div>
        <div className="relative ml-auto">
          <input type="checkbox" id={name} className="sr-only" name={name} ref={reference} />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
       
      </label>
      </div>
  )
}
