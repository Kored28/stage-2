

const Inputs = () => {
  return (
    <div className="flex flex-col gap-6">
        <input type="text" 
         className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
         p-[10px] rounded-lg"
         placeholder="Card Number"
        />
        <input type="text" 
         className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
         p-[10px] rounded-lg"
         placeholder="Name on card"
        />

        <div className="flex justify-between gap-5 sm:gap-0 w-full">
            <input type="text" 
            className="w-1/2 sm:w-[448.42px] h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
            p-[10px] rounded-lg mr-[0] sm:mr-[40px]"
            placeholder="Expiration date(MM/YY)"
            />
            <input type="text" 
            className=" w-1/2 sm:w-[300.95px] h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
            p-[10px] rounded-lg"
            placeholder="CVV"
            />
        </div>

        <div className="flex flex-col">
            <p className="font-poppins text-[15px] mb-3">Billing address</p>

            <div className="flex items-center gap-3">
                <input type="checkbox" id="check" className="hidden peer"/>
                <label htmlFor="check" className="w-[20px] h-[20px] border border-black rounded-full cursor-pointer 
                flex items-center justify-center peer-checked:bg-[#A4179F] ">
                </label>
                <p className="text-black text-[15px] sm:text-[20px]">Same as my shipping address</p>
            </div>
        </div>

        <div className="flex flex-col gap-8">
            <div className="flex-col">
                <label htmlFor="Phone Number" className="text-[15px] font-poppins">Phone Number*</label>
                <input type="text" 
                className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                placeholder="Enter your phone number e.g 123456789"
                id="Phone Number"
                />
            </div>

            <div className="flex-col">
                <label htmlFor="Street name and house number" className="text-[15px] font-poppins">Street name and house number*</label>
                <input type="text" 
                className="w-full h-[51.81px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                placeholder="Enter your street name and house number"
                id="Street name and house number"
                />
            </div>

            <select name="region" id="region"
            defaultValue="Select"
            className="w-full h-[51.81px] outline-none border rounded-lg p-[10px]"
            >
                <option disabled value="Select">Select Region</option>
                <option value="Rivers"> Rivers State</option>
            </select>

            <select name="country" id="country"
            defaultValue="Select"
            className="w-full h-[51.81px] outline-none border rounded-lg p-[10px]"
            >
                <option  disabled value="Select">Select Country</option>
                <option value="Nig">Nigeria</option>
            </select>

            <div className="flex flex-col">
                <label htmlFor="Postal code" className="text-[15px] font-poppins">Postal code*</label>
                <input type="text" 
                className=" w-full sm:w-[417px] h-[43px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                placeholder="Enter Postal code"
                id="Postal code"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="City" className="text-[15px] font-poppins">City*</label>
                <input type="text" 
                className="w-[260px] h-[43px] border-[2px] outline-none bg-[#EBEFF3]
                p-[10px] rounded-lg"
                placeholder="City"
                id="City"
                />
            </div>

        </div>
    </div>
  )
}

export default Inputs