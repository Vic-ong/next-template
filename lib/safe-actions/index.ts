/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodAdapter } from "next-safe-action/adapters/zod";
import {
  createSafeActionClient,
  flattenValidationErrors,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

// Returns error message to client
export class SafeActionInfo extends Error {}

// Logs error and return message to client
export class SafeActionError extends Error {}

export const safeAction = createSafeActionClient({
  validationAdapter: zodAdapter(),
  handleServerError: (e) => {
    if (e instanceof SafeActionInfo) {
      return e.message;
    }

    if (e instanceof SafeActionError) {
      console.error("❌ safe-action error occured:", e.message);
      return e.message;
    }

    // Otherwise return default error message.
    console.error("❌ safe-action error occured:", e.message);
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
  defaultValidationErrorsShape: "flattened",
});

// Parse validation errors into an array of `${fieldname}: ${message}`
// Note: This is used for displaying all errors in one area (for small forms)
export const mergeValidationErrors = (ve: Record<string, any>): string[] => {
  const errors: string[] = [];

  const flatError = flattenValidationErrors(ve);

  Object.keys(flatError.fieldErrors).forEach((field) => {
    errors.push(`${field}: ${flatError.fieldErrors[field]}`);
  });

  return errors;
};
