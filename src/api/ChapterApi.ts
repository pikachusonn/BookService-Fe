import instance from "@/utils/axios";
export const chapterApi = {
    getChapter: (id: string) => {
        return instance.get(`api/v1/library/chapter/${id}`);
    },
};
