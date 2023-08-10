export interface storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  remove(key: string): void;
  destroy(): void;
}
