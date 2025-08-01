import { chapterApi } from "@/api/ChapterApi";
import { QUERY_KEYS } from "@/common/const";
import { useQuery } from "@tanstack/react-query";

export const useGetChapterDetail = (id: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.CHAPTER_DETAIL, id],
        queryFn: () => chapterApi.getChapter(id),
    });
};

