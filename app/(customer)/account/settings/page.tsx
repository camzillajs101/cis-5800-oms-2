export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

      <div className="space-y-6">
        {/* Change Password */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Change Password</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Language Preference */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Language Preference</h2>
          <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        {/* Email Notifications */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Email Notifications</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span>Order confirmations</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span>Shipping updates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Promotional emails</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span>Account notifications</span>
            </label>
          </div>
          <button
            type="button"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Preferences
          </button>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h2>
          <p className="text-gray-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
