import { HandleCheckTime } from './HandleCheckTime';

describe('HandleCheckTime', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  test('returns exceeded when input time is before current and hour >= 18', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2026-01-07T19:00:00'));
    expect(HandleCheckTime('18:30')).toBe('18時を超過しています。');
  });

  test('returns not exceeded when input time is after current and hour >= 18', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2026-01-07T17:00:00'));
    expect(HandleCheckTime('18:00')).toBe('18時を超過していません。');
  });

  test('returns not exceeded when input time is before current but hour < 18', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2026-01-07T19:00:00'));
    expect(HandleCheckTime('17:59')).toBe('18時を超過していません。');
  });

  test('returns not exceeded when input time equals current and hour < 18', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2026-01-07T10:00:00'));
    expect(HandleCheckTime('10:00')).toBe('18時を超過していません。');
  });
});
