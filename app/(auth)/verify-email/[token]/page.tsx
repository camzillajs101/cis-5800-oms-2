export default function VerifyEmailPage({
  params,
}: {
  params: { token: string };
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <h1 className="text-2xl font-bold mb-4">Verify Email</h1>
      <p className="text-gray-600 mb-4">
        Verifying your email address...
      </p>
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
    </div>
  );
}
