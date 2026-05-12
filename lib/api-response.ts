import { NextResponse } from "next/server";

/** Standard JSON envelope from CLAUDE.md */
export type ApiSuccess<T> = {
  success: true;
  data: T;
  error: null;
};

export type ApiError = {
  success: false;
  data: null;
  error: string;
};

export function jsonSuccess<T>(data: T, status = 200) {
  const body: ApiSuccess<T> = { success: true, data, error: null };
  return NextResponse.json(body, { status });
}

export function jsonError(message: string, status = 400) {
  const body: ApiError = { success: false, data: null, error: message };
  return NextResponse.json(body, { status });
}
