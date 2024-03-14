

const Loading2 = () => {
  return (
    <div
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="relative max-w-md p-6 bg-white rounded-md shadow-lg">
      <span className="loading loading-spinner text-accent"></span>
      </div>
    </div>
  )
}

export default Loading2