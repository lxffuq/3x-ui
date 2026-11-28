import type { SponsorList } from '@/generated/types';

const EMPTY: SponsorList = { sponsors: [] };

// fork 已移除赞助广告：不再请求 /sponsors，不展示任何赞助内容。
export function useSponsorsQuery() {
  return { data: EMPTY, fetched: true };
}
