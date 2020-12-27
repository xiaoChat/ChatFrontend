import { UserData } from "@/api/interface/user";

export function setAuthority(token: string, params: UserData = {}): void {
  localStorage.setItem('ye-token', token);
  localStorage.setItem('ye-userinfo', JSON.stringify(params));
}

export function getAuthority(): string {
  const res = localStorage.getItem('ye-token');
  return res ? res : ''
}

export function clearAuthority(): void {
  localStorage.removeItem('ye-token');
  localStorage.removeItem('ye-userinfo');
}