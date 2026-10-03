// 文章按 frontmatter 的 updated / published 自动加入。
// 相册、歌单等没有修改日期的内容，在实际更新后手动添加记录。
// date 使用 YYYY-MM-DD；href 使用站内路径（可包含锚点）。
export const recentUpdatesConfig: {
	limit: number;
	entries: { title: string; date: string; kind: string; href: string }[];
} = {
	limit: 5,
	entries: [
		{
			title: "音乐支持分类内循环播放",
			date: "2026-10-02",
			kind: "音乐",
			href: "/#left-sidebar",
		},
		{
			title: "新增 19 首日语与纯音乐，补齐专辑封面",
			date: "2026-10-02",
			kind: "音乐",
			href: "/#left-sidebar",
		},
	],
};
