
function App() {
  let menu = [
    "Dashboard",
    "Projects",
    "Tasks",
    "Team",
    "Reports",
    "Settings"
  ];
  let stats = [
    { title: "Total Projects", value: "24", icon: "📁", color: "bg-purple-100" },
    { title: "Total Tasks", value: "1,248", icon: "📋", color: "bg-blue-100" },
    { title: "Active Members", value: "18", icon: "👥", color: "bg-green-100" },
    { title: "Pending Tasks", value: "96", icon: "🕒", color: "bg-yellow-100" }
  ];

  let tasks = [
    { task: "Review AI model", project: "Image Labeling", assigned: "AK", status: "Completed" },
    { task: "Validate dataset", project: "Speech to Text", assigned: "SP", status: "In Progress" },
    { task: "Update evaluation script", project: "Model QA", assigned: "AR", status: "Pending" },
    { task: "Prepare report", project: "DC Reporting", assigned: "VK", status: "Completed" },
    { task: "Sync data", project: "Data Pipeline", assigned: "NK", status: "Pending" }
  ];

  let projects = [
    { name: "Image Labeling", members: "6 members", status: "Active", icon: "🟣" },
    { name: "Speech to Text", members: "4 members", status: "Active", icon: "🎙️" },
    { name: "Model QA", members: "5 members", status: "On Hold", icon: "🔴" },
    { name: "DC Reporting", members: "3 members", status: "Active", icon: "🟢" },
    { name: "Data Pipeline", members: "7 members", status: "Active", icon: "🔵" }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 text-white p-5">
        <h2 className="text-xl font-bold text-white mb-8">
  PulseWorks AI
</h2>
        <ul className="space-y-3">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg cursor-pointer ${
                index === 0
                  ? "bg-indigo-600"
                  : "hover:bg-slate-700"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="bg-white border rounded-lg px-4 py-2 w-64"
          />

          <p className="text-gray-500">Wednesday, Nov 25</p>
        </div>

        {/* Welcome */}
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome back! 👋
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Here's what's happening today.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`${item.color} p-3 rounded-lg text-xl`}>
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-2xl font-bold text-slate-800">
                    {item.value}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Recent Tasks */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Recent Tasks
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="p-3">Task</th>
                    <th className="p-3">Project</th>
                    <th className="p-3">Assigned</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((item, index) => (
                    <tr key={index} className="border-b text-sm">
                      <td className="p-3">{item.task}</td>
                      <td className="p-3">{item.project}</td>
                      <td className="p-3">{item.assigned}</td>

                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : item.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Projects */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Active Projects
            </h2>

            <ul className="space-y-4">
              {projects.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-xl">{item.icon}</span>

                    <div>
                      <h3 className="font-medium text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {item.members}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
