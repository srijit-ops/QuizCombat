import React from "react";

function Result({ finalGivenAns }) {
  return (
    <div className="w-3/5 flex justify-center items-center my-9">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-gray-400 tracking-wider text-left text-[17px]">
            <th className="pt-4 pb-2 font-medium">Question No.</th>
            <th className="pt-4 pb-2 font-medium">Actual answer</th>
            <th className="pt-4 pb-2 font-medium">Given answer</th>
            <th className="pt-4 pb-2 font-medium">Score</th>
          </tr>
        </thead>
        <tbody className="border-t-[20px] border-transparent">
          {finalGivenAns.map((item, index) => {
            return (
              <tr key={index} className="pt-3 border-t border-gray-600">
                <td className="text-base py-4 text-gray-300">{index + 1}</td>
                <td className="text-white py-4">{item.correctAns}</td>
                <td
                  className={`${
                    item.correctAns === item.givenAnswer
                      ? "text-green-400"
                      : "text-red-500"
                  } py-4`}
                >
                  {item.givenAnswer}
                </td>
                <td className={`text-white py-4`}>
                  {item.correctAns === item.givenAnswer ? 10 : 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
