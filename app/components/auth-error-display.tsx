interface AuthErrorDisplayProps {
  error: string;
}

export default function AuthErrorDisplay({ error }: AuthErrorDisplayProps) {
  return (
    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md mb-6">
      <p className="text-red-700 dark:text-red-400 text-sm font-medium">
        ⚠️ {error}
      </p>
    </div>
  );
}
