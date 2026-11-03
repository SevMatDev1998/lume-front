export const getApiErrorMessage = (error: unknown): string => {
  const message = (error as { data?: { message?: string | string[] } })?.data?.message;
  if (Array.isArray(message)) return message.join(", ");
  return message || "Something went wrong. Please try again.";
};
