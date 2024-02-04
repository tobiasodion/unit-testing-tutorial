import { describe, it, expect, vi } from "vitest";
import { getPost } from '/src/utils/service';

describe('service', () => {
    it('should return post object', () => {
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date);

        const actualResult = getPost(1);
        const expectedResult = {
            id: 1,
            title: 'title',
            content: 'content',
            time: date
        };

        const actualResult2 = getPost(3);
        const expectedResult2 = {
            id: 3,
            title: 'title',
            content: 'content',
            time: date
        };

        expect(actualResult2).toEqual(expectedResult2);
    });
});