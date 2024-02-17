/* eslint-disable react/prop-types */
const Table = ({ data }) => {
  return (
    <div className=" h-fit">
      {/* <img
        src="./TableSecBg.png"
        alt="Background"
        className="absolute inset-0 object-center object-cover w-full h-full z-10"
      /> */}
      <div className=" flex flex-col justify-center items-center py-5">
        <table className="w-11/12 md:w-2/3 text-sm text-center rtl:text-right  bg-yellow-800/50">
          <thead className="text-md text-gray-900 uppercase border-b-2 border-[#4b1717]">
            <tr>
              {data.values[0].map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.values.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 align-middle">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
