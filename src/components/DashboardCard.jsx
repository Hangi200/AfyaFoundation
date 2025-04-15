export default function DashboardCard({ title, value, icon, color }) {
    return (
      <>
      <div className={`flex items-center p-5 bg-white rounded-lg shadow-md border-l-4 ${color}`}>
        {/* Icon */}
        <div className="px-3 flex items-center justify-between bg-gray-100 rounded-full w-10 h-10 text-0xl text-fuchsia-700 shadow-md">
          {icon}
        </div>
        {/* Info */}
        <div className="ml-4">
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>

      
      </>
    );
  }
  